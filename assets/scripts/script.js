
$(document).ready(function () {
  // console.log( "Here is our Javascript!" );
  var allEffects = [];
  var allFlavors = [];
  var allStrains = [];
  var strainRec = [];
  var key = "zBGPK18";


  // This function grabs all effects from the strain API
  function getEffects() {
    var effectsURL = `https://strainapi.evanbusse.com/${key}/strains/search/effect/EFFECT`;
    $.ajax({
      url: effectsURL,
      method: "Get"
    }).then(function (effects) {
      allEffects.push(effects);
      // displays all effects for navigationS
      console.log(allEffects);
      // depression
      $("#checkbox1").val(allEffects[0][5].effect);
      // insomnia
      $("#checkbox2").val(allEffects[0][6].effect);
      // muscl aches/pains
      $("#checkbox3").val(allEffects[0][7].effect);
      // stress
      $("#checkbox4").val(allEffects[0][8].effect);
      // menstrual cramps
      // $("#checkbox5").val(allEffects[0][].effect);
      // leg cramps
      // $("#checkbox6").val(allEffects[0][].effect);
      // poor appetites
      $("#checkbox7").val(allEffects[0][13].effect);
      // nausea 
      $("#checkbox8").val(allEffects[0][14].effect);
      // headache
      $("#checkbox9").val(allEffects[0][16].effect);
      // fatigue
      $("#checkbox10").val(allEffects[0][21].effect);
      // anti inflammation diet
      $("#checkbox11").val(allEffects[0][29].effect);
      // seizures
      $("#checkbox12").val(allEffects[0][31].effect);
      // muscle cramps
      // $("#checkbox13").val(allEffects[0][].effect);


      
    })
  }
  getEffects();
})
  // This function grabs all flavors from the strain API
//   function getUserFlavors() {
//     var flavorURL = `https://strainapi.evanbusse.com/${key}/searchdata/flavors`;
//     $.ajax({
//       url: flavorURL,
//       method: "Get"
//     }).then(function (flavors) {
//       allFlavors.push(flavors);
//       // displays all flavor choices for navigation
//       console.log(allFlavors);
//     });
//   }
//   getUserFlavors();
// })
  // This function grabs all strains from the strain API
  // function getStrains() {
  //   var strainURL = `https://strainapi.evanbusse.com/${key}/strains/search/all`;
  //   $.ajax({
  //     url: strainURL,
  //     method: "Get"
  //   }).then(function (strains) {
  //     allStrains.push(strains);
  //     // displays all strains in console
  //     console.log(allStrains);
  //     // console.log(strains[0][1].id);
  //   });
  // }
  // getStrains();



// =======
// $( document ).ready(function() {
//   console.log( "Here is our Javascript!" );
//   //*** Personal Remedies API ***//
//   //*** code by Nate King ***//
//   /************
//   ID#s - ailments
//   ---------------
//   18 - depression
//   21 - stress
//   32 - cramps - no data from personal remedies, not in prProbIDs array
//   58 - inflammation
//   60 - lack of appetite
//   144 - fatigue
//   157 - glaucoma
//   165 - headache
//   190 - insomnia
//   224 - pain
//   229 - nausea
//   260 - seizures - no data from personal remedies, not in prProbIDs array
//   **************/


//  prProbIDs = [18, 21, 58, 60, 144, 157, 165, 190, 224, 229];  
  
//  //PR API url
//  let prURL = `https://nutridigm-api-dev.azurewebsites.net/api/v1/nutridigm/suggest?subscriptionId=1&problemId=${prProbIDs[0]}&fg2=k2`

//  $.ajax({
//    url: prURL,
//    method: "GET",
//  }).then(function(herbs){
//    console.log(herbs)
//  })
// >>>>>>> cde8fafb7d0f10b782f1c2329c33fbaf2c777c01