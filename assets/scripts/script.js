$(document).ready(function () {
  
  // Get Local Storage by Dmitri Kent So
  // Retrieves the stored strains and their ids from local stor
  let storedStrains = JSON.parse(localStorage.getItem('storedStrains'))
  // Global variable to store strains that a user clicks on
  if (storedStrains === null) {
    storedStrains = [];
  } 
  //for each strain in local stor, add it to the DOM as dropdown options
  for (let i = 0; i < storedStrains.length; i++) {
    $('<option>').attr('id', storedStrains[i].id).text(storedStrains[i].name).appendTo('#saved-strains')
  };

  //Strain API keys
  const key = "zBGPK18"; //Dmitris key. Nates is WDnZQMY
  //Ailment selection dropdown creation
  const aliments = ['Cramps', 'Depression', 'Fatigue', 'Glaucoma', 'Headache',  'Inflammation', 'Insomnia', 'Lack of Appetite', 'Muscle Spasms', 'Nausea', 'Pain', 'Seizures', 'Stress']
  
  //Loop to add each ailment to the dropdown
  for (let i = 0; i < aliments.length; i++) {
      $('<option>').text(aliments[i]).attr('id', aliments[i]).appendTo('#symptoms')
    };

  //Function that calls Strain API and adds the returned data to the DOM
  //Called in button click event listeners
  const strainDetails = ($strainID) => {
    //Clear out any data in the flavors cards and description div
    $('#strain-descrip, #flavors, #posi-effects, #neg-effects' ).empty();

    //API call to get the flavors of the chosen strain
    $.ajax({
      url: `https://strainapi.evanbusse.com/${key}/strains/data/flavors/${$strainID}`,
      method: "GET",
    }).then(function (flavor) {
      //for loop that goes through all of the provided flavor profiles of the chosen strain and writes the to the flavor profiles card
      for (let i = 0; i < flavor.length; i++) {
        $('<li>').attr("id", `flavor-${i + 1}`).text(flavor[i]).appendTo('#flavors');
      }
    });

    //API call to get the posi and neg effects of the chosen strain
    $.ajax({
      url: `https://strainapi.evanbusse.com/${key}/strains/data/effects/${$strainID}`,
      method: "GET",
    }).then(function (effects) {
      //for loop that goes through all of the provided positive effects of the chosen strain and writes the to the positive effects profiles card
      for (let i = 0; i < effects.positive.length; i++) {
        $('<li>').attr("id", `posi-${i + 1}`).text(effects.positive[i]).appendTo('#posi-effects');
      }
      //for loop that goes through all of the provided negative effects of the chosen strain and writes the to the negative effects profiles card
      for (let i = 0; i < effects.negative.length; i++) {
        $('<li>').attr("id", `neg-${i + 1}`).text(effects.negative[i]).appendTo('#neg-effects');
      }
    });

    //Strain API call to get the clicked on strains description
    $.ajax({
      url: `https://strainapi.evanbusse.com/${key}/strains/data/desc/${$strainID}`,
      method: "GET",
    }).then(function (desc) {

      //Writes the description of the strain to the description div
      $('#strain-descrip').text(desc.desc)
    });
  }// end of strainDetails()

  //*** Submit button event listener that kicks off API calls ***//
  $('#submitBtn').on('click', function(){

    //Clear out any data on the DOM & hide the save strain button
    $('#strain-list, #herbal, #strain-descrip, #flavors, #posi-effects, #neg-effects, #descrip-h3').empty();
    $('#save-btn').css('display', 'none');

    //Variable that is set to the user selected ailment 
    let $userChoice = $('#symptoms option:selected').val().toLowerCase();

    //If ailment selection left blank ask for user to make a choice
    if ($('#symptoms option:selected').text() === '' ){
      $('#symptoms-id').text('Please make a choice');
      return;
    //If selection is glaucoma or muscle spasms convert into the proper string for the Strain API search
    }else if ($userChoice === 'glaucoma'){
      $userChoice = 'eye%20pressure'
    }else if ($userChoice === 'muscle spasms'){
      $userChoice = 'muscle%20spasms'
    }

    //*** Strain API****//
    //Strain API call for ailment
    $.ajax({
      url: `https://strainapi.evanbusse.com/${key}/strains/search/effect/${$userChoice}`,
      method: "GET",
    }).then(function(effect){
        //Storage array for randomly generated strains. This array holds objects returned from API call
        let strainRecID = []

        //for loop to pick 5 random strains
        for (let i = 1; i < 6; i++) {
          let randoPick = Math.floor(Math.random() * (effect.length - 1));
          //push the strain IDs to the strainRecID storage Array
          strainRecID.push(effect[randoPick])
        }

        //for loop to create a li element for strainRecId's length and write the name of the strain in each li element. Element id corresponds with strain ID#
        for (let i = 0; i < strainRecID.length; i++) {
          $('<li>').attr('id', strainRecID[i].id).text(strainRecID[i].name).appendTo('#strain-list');

        }

      //*** Personal Remedies(PR) API ***//
      /************
      /The list below are the cherry-picked ailments from PR that correspond with all the ailments returned from The Strain API
      ID#s - ailments
      ---------------
      18 - depression
      21 - stress
      32 - muscle cramps/spasms - no data from PR, not in prProbID array
      58 - inflammation
      60 - lack of appetite
      144 - fatigue
      157 - glaucoma
      165 - headache
      190 - insomnia
      213 - menstrual cramps  - no data from PR, not in prProbID array
      224 - pain
      229 - nausea
      260 - seizures - no data from PR, not in prProbID array
      **************/

      //PR ailment array used for the API call to PR
      const prProbID = [
        {name:'depression', id: 18},
        {name:'stress', id: 21},
        {name:'inflammation', id: 58},
        {name:'lack of appetite', id: 60},
        {name:'fatigue', id: 144},
        {name:'eye%20pressure', id: 157}, //glaucoma 
        {name:'headache', id: 165},
        {name:'insomnia', id: 190},
        {name:'pain', id: 224},
        {name:'nausea', id: 229},
      ];
    
      //Array with ailment remedies that the PR API returns as null
      //List if herbal remedies for cramps found on https://herbalcommittea.com/blog/5%20Herbs%20for%20Menstrual%20Cramps%20&%20Period%20Symptoms
      //List of herbal remedies for muscle spasms found on https://garrowwellnesscenter.com/top-5-best-natural-muscle-relaxers/
      const noPrProb = [
        {name: 'cramps', remedies: ['Chasteberry', 'Raspberry Leaf', 'Chamomile', 'Fennel', 'Wild Yam'] },
        {name: 'muscle%20spasms', remedies: ['Magnesium', 'Lavender', 'Rosemary', 'Chamomile', 'Peppermint']},
        {name: 'seizures', remedies: ['Due to the severity of seizures we recommend speaking to your doctor before taking any herbal supplements.'] }
      ]

      //Function to get the PR id# of the users ailment choices. Result is called on in the PR API call url
      let  userProb = () => {
        for (let i = 0; i < prProbID.length; i++) {
          if ($userChoice === prProbID[i].name){
            let prID = prProbID[i].id;
            return prID;
          }
        } 
      }//End of userProb()

      //Loop through the prProb arr for API results
      for (let i = 0; i < prProbID.length; i++) {
        //if the users choice and the PR ailment are equal, add the first 5 remedies returned from the PR API call
        if ($userChoice === prProbID[i].name){
          $.ajax({
            url: `https://nutridigm-api-dev.azurewebsites.net/api/v1/nutridigm/suggest?subscriptionId=1&problemId=${userProb()}&fg2=k2`,
            method: "GET",
          }).then(function (herbs){
            //For loop limits the response to 5 remedies and prevents errors if less than 5 are returned from the PR API
            for (let i = 0; i < 5 && i < herbs.length; i++) {
              //Append the results to the DOM
              $('<li>').attr("id", `herb-${i + 1}`).text(herbs[i].fiDisplay).appendTo('#herbal')
              //If medical cannabis is returned, it is not added to the list
              if($(`#herb-${i + 1}`).text().toLowerCase() === 'medical cannabis'){
                $(`#herb-${i + 1}`).remove();
              }
            }
          });
        }
      }//End of PR API call

      //Loop through noPrProb for custom results
      for (let i = 0; i < noPrProb.length; i++) {
        //if the users choice is an ailment that has no data from the PR API then pull remedies from the PR noPrProb array and append to DOM
        if ($userChoice === noPrProb[i].name){
          for (let j = 0; j < noPrProb[i].remedies.length; j++) {
            $('<li>').attr("id", `herb-${i + 1}`).text(noPrProb[i].remedies[j]).appendTo('#herbal');
          }
        }
      }//End custom results 
  
      //On click listener for the user to select strains in the strain name list to get more details 
      $('li').on('click', function (e) {
        e.preventDefault();
        //variable that corresponds with the strain ID of the clicked in strain name. This is used to make the next API calls.
        let $strainID = $(this).attr('id');
        let $strainName = $(this).text();
        
        //Call function that adds flavors, posi & neg effects, & descrip to the DOM 
        strainDetails($strainID);
        //Show save button
        $('#save-btn').css('display', 'block');
        //Adds a heading for the selected strain
        $('h3').attr('id', 'descrip-h3').text($strainName).insertBefore('#strain-descrip');

        // Set Local Storage by Dmitri Kent So
        // Event listener for save button click to set local stor
        $('#save-btn').off().on('click', function(e){
          e.preventDefault;
          //Object with chosen strain name and ID
          let $strainObj = {name: $strainName, id: $strainID};
          //That object is pushed tot he local stor array
          storedStrains.push($strainObj);
          //Local stor set
          localStorage.setItem('storedStrains', JSON.stringify(storedStrains));
          //Add the chosen stain to the dropdown
          $('<option>').attr('id', $strainObj.id).text($strainObj.name).appendTo('#saved-strains')
        });//End of save button event listener
      });//End of provided strain selection event listener
    });//End of initial Strain API call
  });//End of submit button event listener

  //On click listener for the button that displays the info of the selected strain in local stor
  $('#info-btn').on('click', function(e) {
    e.preventDefault;
    //Variables to get the selected strains name & id
    let $strainID = $('#saved-strains option:selected').attr('id');
    let $strainName = $('#saved-strains option:selected').text();

    //If a strain is not selected, append the DOM to ask the user to make a selection
    if($strainID === 'saved-strains-id'){
      $('#saved-strains option:selected').text('Please make a selection!');
      return;
    }

    //Add a heading with the name of the strain that was selected
    $('h3').attr('id' ,'descrip-h3').text($strainName).insertBefore('#strain-descrip');
    strainDetails($strainID);
  });//End of display info button event listener

  // Clear button to clear local storage, empty the dropdown, and clear the array for local stor
  $('#clear-btn').click( () => {
    localStorage.clear();
    $('#saved-strains').empty();
    storedStrains = [];
  });//End of clear button event listener

  // Toggle function DS
  // must give the button an id for this function
  
  $(function(){
    $("#remediesBtn").click(function(){
      $this.val()== "display" ? showRemedies() : hideRemedies();
    });
  });

  function showRemedies() {
    $("#remediesBtn").val("pause");
  }

  function hideRemedies() {
    $("#remediesBtn").val("play");
  }
  
});
