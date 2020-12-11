$(document).ready(function () {
  // console.log( "Here is our Javascript!" );
  var allEffects = [];
  var allFlavors = [];
  var allStrains = [];
  var strainRec = [];
  var key = "zBGPK18";


  // This function grabs all effects from the strain API
  function getEffects() {
    var effectsURL = `https://strainapi.evanbusse.com/${key}/searchdata/effects`;
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


      console.log("type" in allEffects[0][1]);


    if (allEffects[0][i].hasOwnProperty("type")) {
      console.log("thisworks");
      for (var i = 0; i < allEffects.length; i++) {
        console.log("thisworks");
        $("input").addClass("medical");


       
      }
    }
    

    });
  }
  getEffects();

  // This function grabs all flavors from the strain API
  function getUserFlavors() {
    var flavorURL = `https://strainapi.evanbusse.com/${key}/searchdata/flavors`;
    $.ajax({
      url: flavorURL,
      method: "Get"
    }).then(function (flavors) {
      allFlavors.push(flavors);
      // displays all flavor choices for navigation
      console.log(allFlavors);
    });
  }
  getUserFlavors();

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






});