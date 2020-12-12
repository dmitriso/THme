$(document).ready(function () {
 
  //*** Strain API****//
  //------------------//

  //Strain API call for ailment
  $.ajax({
    url: `https://strainapi.evanbusse.com/WDnZQMY/strains/search/effect/Insomnia`,
    method: "GET",
  }).then(function(effect){
    // console.log(effect);

    //Storage array for randomly generated strain ID's
    let strainRecID = []

    //for loop to pick 5 random strain ID's
    for (let i = 1; i < 6; i++) {
      let randoPick = Math.floor(Math.random() * (effect.length - 1));
      //push the strain IDs to the strainRecID storage Array
      strainRecID.push(effect[randoPick])
    }console.log(strainRecID)

    
    //for loop to create a li element for strainRecId's length and write the name of the strain in each li element. Element id corresponds with strain ID#
    for (let i = 0; i < strainRecID.length; i++) {
      $('<li>').attr('id', strainRecID[i].id).text(strainRecID[i].name).appendTo('#strain-list');
    }

    //On click listener for the strain names in the strain name list
    $('li').on('click', function(e){
      e.preventDefault();
      //Clear out any data in the flavors card and description div
      $('#flavors').empty();
      $('#desc').empty();
      //variable that corresponds with the strain ID of the clicked in strain name. This is used to make the next API calls.
      let $strainID = $(this).attr('id');

      //API call to ge the flavors of the chosen strain
      $.ajax({
        url: `https://strainapi.evanbusse.com/WDnZQMY/strains/data/flavors/${$strainID}`,
        method: "GET",
      }).then(function(flavor){
        //for loop that goes through all of the provided flavor profiles of the chosen strain and writes the to the flavor profiles card
        for (let i = 0; i < flavor.length; i++) {
          $('<li>').attr("id", `flavor-${i + 1}`).text(flavor[i]).appendTo('#flavors');
        }
      });

      //Strain API call to get the clicked on strains description
      $.ajax({
        url: `https://strainapi.evanbusse.com/WDnZQMY/strains/data/desc/${$strainID}`,
        method: "GET",
      }).then(function(desc){
        //Writes the description of the strain to the description div
        $('#desc').text(desc.desc)
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


  // prProbIDs = [
    // {18,} 
    // {21,} 
    // {58,} 
    // {60,} 
    // {144,} 
    // {157,} 165, 190, 224, 229];

  //Personal remedies API call
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

});
