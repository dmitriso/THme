
// Strain API ds
$(document).ready(function () {
var strainHistory = [];
  // localStorage.clear();

  // var allEffects = [];
  //Strain API keys
  const key = "zBGPK18"; //Dmitris key. Nates is WDnZQMY
  // // This function grabs all effects from the strain API
  // function getEffects() {
  //   var effectsURL = `https://strainapi.evanbusse.com/${key}/searchdata/effects`;
  //   $.ajax({
  //     url: effectsURL,
  //     method: "Get"
  //   }).then(function (effects) {
  //     allEffects.push(effects);
  //     // sets all effects for  user selection
  //     // console.log(allEffects);
  //     // depression
  //     $("#checkbox1").val(allEffects[0][5].effect);
  //     // insomnia
  //     $("#checkbox2").val(allEffects[0][6].effect);
  //     // muscl aches/pains
  //     $("#checkbox3").val(allEffects[0][7].effect);
  //     // stress
  //     $("#checkbox4").val(allEffects[0][8].effect);
  //     // menstrual cramps
  //     // $("#checkbox5").val(allEffects[0][].effect);
  //     // leg cramps
  //     // $("#checkbox6").val(allEffects[0][].effect);
  //     // poor appetites
  //     $("#checkbox7").val(allEffects[0][13].effect);
  //     // nausea 
  //     $("#checkbox8").val(allEffects[0][14].effect);
  //     // headache
  //     $("#checkbox9").val(allEffects[0][16].effect);
  //     // fatigue
  //     $("#checkbox10").val(allEffects[0][21].effect);
  //     // anti inflammation diet
  //     $("#checkbox11").val(allEffects[0][29].effect);
  //     // seizures
  //     $("#checkbox12").val(allEffects[0][31].effect);
  //     // muscle cramps
  //     // $("#checkbox13").val(allEffects[0][].effect);
  //   })
  // }
  // getEffects();


  var aliments = ['depression', 'stress', 'inflammation', 'lack of appetite', 'fatigue', 'glaucoma', 'headache', 'insomnia', 'pain', 'nausea']
  for (let index = 0; index < aliments.length; index++) {
    $('<option>').text(aliments[index]).attr('id', aliments[index]).appendTo('#symptoms')
  };
  //Submit button event listener to kick off API calls
  $("#submitBtn").on("click", function () {

    //*** Strain API****//
    //------------------//
    //Strain API call for ailment
    $.ajax({
      url: `https://strainapi.evanbusse.com/${key}/strains/search/effect/Insomnia`,
      method: "GET",
    }).then(function (effect) {
      // console.log(effect);

      //Storage array for randomly generated strains. This array holds objects returned from API call
      let strainRecID = []

      //for loop to pick 5 random strains
      for (let i = 1; i < 6; i++) {
        let randoPick = Math.floor(Math.random() * (effect.length - 1));
        //push the strain IDs to the strainRecID storage Array
        strainRecID.push(effect[randoPick])
      }//console.log(strainRecID)

      //for loop to create a li element for strainRecId's length and write the name of the strain in each li element. Element id corresponds with strain ID#
      for (let i = 0; i < strainRecID.length; i++) {
        $('<li>').attr('id', strainRecID[i].id).text(strainRecID[i].name).appendTo('#strain-list');

      }

      //On click listener for the strain names in the strain name list
      $('li').on('click', function (e) {
        e.preventDefault();


        //Clear out any data in the flavors card and description div
        $('#flavors').empty();
        $('#posi-effects').empty();
        $('#neg-effects').empty();
        $('#strain-descrip').empty();
        //variable that corresponds with the strain ID of the clicked in strain name. This is used to make the next API calls.
        let $strainID = $(this).attr('id');


        // Local Storage by Dmitri Kent So
        // this will set an array of user clicked strain ids into local storage
        var $strainName = $(this).text();
        strainHistory.push($strainName);
        localStorage.setItem("storedStrains", JSON.stringify(strainHistory));
        console.log(strainHistory);



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
      });
    });

    //*** Personal Remedies API ***//
    //----------------------------//
    /************
    ID#s - ailments
    ---------------
    18 - depression
    21 - stress
    32 - cramps - no data from personal remedies, not in prProbIDs array
    58 - inflammation
    60 - lack of appetite
    144 - fatigue
    157 - glaucoma
    165 - headache
    190 - insomnia
    224 - pain
    229 - nausea
    260 - seizures - no data from personal remedies, not in prProbIDs array
    **************/


    const prProbID = [
      { name: 'depression', id: 18 },
      { name: 'stress', id: 21 },
      // {name:'cramps', id: 32},
      { name: 'inflammation', id: 58 },
      { name: 'lack of appetite', id: 60 },
      { name: 'fatigue', id: 144 },
      { name: 'glaucoma', id: 157 },
      { name: 'headache', id: 165 },
      { name: 'insomnia', id: 190 },
      { name: 'pain', id: 224 },
      { name: 'nausea', id: 229 },
      // {name:'seizures', id: 260},
    ];

    const cramps = ['Chasteberry', 'Raspberry Leaf', 'Chamomile', 'Fennel', 'Wild Yam'];

    //Personal remedies API call

    /* if (ailment selection === 'cramps'){
      for (let i = 0; i < 5; i++) {
        $('<li>').attr("id", `herb-${i + 1}`).text(cramps[i]).appendTo('#herbal');
      }
    }if else (ailment selection === 'seizures'){
      $('<li>').attr("id", `herb-1`).text('Due to the severity of seizures we recommend speaking to your doctor before taking any herbal supplements.').appendTo('#herbal');
    }else{} */
    $.ajax({
      url: `https://nutridigm-api-dev.azurewebsites.net/api/v1/nutridigm/suggest?subscriptionId=1&problemId=190&fg2=k2`,
      method: "GET",
    }).then(function (herbs) {
      // console.log(herbs)
      //for loop that goes through the top 5 herbal remedy recommendations and writes them to the herbal remedies card
      for (let i = 0; i < 5; i++) {
        $('<li>').attr("id", `herb-${i + 1}`).text(herbs[i].fiDisplay).appendTo('#herbal');
      }
    });


  });//End of submit button listener



  // Local Storage by Dmitri Kent So
  // this retrieves the stored list of strain ids
  var storedStrains = JSON.parse(localStorage.getItem("storedStrains"))
  console.log(storedStrains);
  // Global variable to store strains that a user clicks on
  if (storedStrains === null) {
  } else {
    strainHistory = storedStrains;
    console.log(strainHistory);
  }

  // Local storage generating previous strain names as buttons DS
  for (var i = 0; i < 10; i++) {
    console.log("this worked");
    $("#strain-history").prepend($("<button>").addClass("savedStrain").text(strainHistory[i]));
    
  }

  // Clear button to empty sibling ("#strain-history") of text
  $('#clear-btn').click(() => {
    localStorage.clear();
    $('#strain-history').empty();
  });

  // Event listener that uses searched strain id to display data
  $(".savedStrain").on("click", function () {


  })
  // End of strain history button event DS

});





