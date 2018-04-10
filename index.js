$(document).ready(function() {

  alert("document is ready!");

});




//Function that will change icon based on weather.

//control flow with if statements for different conditions




function farenheitToCelcius (tempF) {

  var tempC = (5/9) * (tempF - 32 );
  return tempC;
}

function celciusToFarenheight (tempC) {

  var tempF = (9/5) * tempC + 32;
  return tempF
}
