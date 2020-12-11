$( document ).ready(function() {
  console.log( "Here is our Javascript!" );
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
 }).then(function(herbs){
   console.log(herbs)
 })



});