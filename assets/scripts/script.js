
$(document).ready(function () {
  // console.log( "Here is our Javascript!" );
  var allEffects = [];
  var key = "zBGPK18";
  // This function grabs all effects from the strain API
  function getEffects() {
    var effectsURL = `https://strainapi.evanbusse.com/${key}/searchdata/effects`;
    $.ajax({
      url: effectsURL,
      method: "Get"
    }).then(function (effects) {
      allEffects.push(effects);
      // sets all effects for  user selection
      // console.log(allEffects);
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

$("#submitBtn").on("click", function(){
  var userEffect =$("#checkbox1").val();
  var effectURL = `https://strainapi.evanbusse.com/zBGPK18/strains/search/effect/${userEffect}`;
  $.ajax({
    url: effectURL,
    method: "Get"
  }).then(function (effectRec) {
    console.log(effectRec);
    var effRec =  [];
    // This generates 5 random strain names from the effect reccomendation list
    for (var i = 0; i <5; i++) {
    var userEffectRec = Math.floor(Math.random() * (effectRec.length - 1));
    // console.log(userEffectRec);
    effRec.push(effectRec[userEffectRec].name);
    console.log(effRec);
    }
  })

})
  // this function has an ajax call that pulls strain info based off of the strain id
  $("li").on("click", function(){
    function strainInfo() {
      var strainId =$(this);
      var strainDesURL = `https://strainapi.evanbusse.com/${key}/strains/data/desc/${strainId}`;
      var strainEffURL = `https://strainapi.evanbusse.com/${key}/strains/data/effects/${strainId}`;
      var strainFlaURL = `https://strainapi.evanbusse.com/${key}/strains/data/flavors/${strainId}`;
  
      $.ajax({
        url: strainDesURL,
        method: "Get"
      }).then(function (strainDes) {
        console.log(strainDes);
  
      })
  
      $.ajax({
        url: strainEffURL,
        method: "Get"
      }).then(function (strainEff) {
        console.log(strainEff);
  
      })
  
      $.ajax({
        url: strainFlaURL,
        method: "Get"
      }).then(function (strainFl) {
        console.log(strainFl);
  
      })
    }
    strainInfo();
  })




});

