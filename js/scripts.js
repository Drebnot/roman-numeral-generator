// Business Logic

// give I a value of 1
// var I = parseInt ("1");

function numerals(input) {
  if (input == 1) {
    return "I";
  } else if (input == 5) {
    return "V";
  } else if (input == 10) {
    return "X";
  } else if (input == 50) {
    return "L";
  } else if (input == 100) {
    return "C";
  } else if (input == 500) {
    return "D";
  } else if (input == 1000) {
    return "M";
  }
  }






// User Interface Logic

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
  });
});
