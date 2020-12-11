$(document).ready(function () {
  //*** Personal Remedies API ***//
  //*** code by Nate King ***//
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


  prProbIDs = [18, 21, 58, 60, 144, 157, 165, 190, 224, 229];

  //PR API url
  let prURL = `https://nutridigm-api-dev.azurewebsites.net/api/v1/nutridigm/suggest?subscriptionId=1&problemId=${prProbIDs[0]}&fg2=k2`

  $.ajax({
    url: prURL,
    method: "GET",
  }).then(function (herbs) {
    //  console.log(herbs)
  })



  let effectURL = `https://strainapi.evanbusse.com/WDnZQMY/strains/search/effect/Insomnia`

  $.ajax({
    url: effectURL,
    method: "GET",
  }).then(function (effect) {
    console.log(effect);

    //Storage array for randomly generated strain ID's
    let strainRecID = []

    //for loop to pick random strain ID's
    for (let i = 1; i < 6; i++) {
      let randoPick = Math.floor(Math.random() * (effect.length - 1));
      strainRecID.push(effect[randoPick])
    }
    console.log(strainRecID)
    //for loop to create a li element for strainRecId's length and write the name of the strain in each li element. Element id corresponds with strain ID

    for (let i = 0; i < strainRecID.length; i++) {
      $('<li>').attr('id', strainRecID[i].id).appendTo('#strain-list');
      // console.log(`#${strainRecID[i].id}`)
      $(`#${strainRecID[i].id}`).text(strainRecID[i].name);
    }

    $('li').on('click', function (e) {
      e.preventDefault();
      let $strainID = $(this).attr('id');

      let flavorURL = `https://strainapi.evanbusse.com/WDnZQMY/strains/data/flavors/${$strainID}`

      $('li').on('click', function(e){
        e.preventDefault();
        let $strainID = $(this).attr('id');

        let flavorURL = `https://strainapi.evanbusse.com/WDnZQMY/strains/data/flavors/${$strainID}`
        $.ajax({
          url: flavorURL,
          method: "GET",
        }).then(function (effect) {



        })
        
      
      
      
      })//End of li click event listener
    })

  })


});