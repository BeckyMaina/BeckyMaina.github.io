// Assignment Code
var generateBtn = document.querySelector("#generate");

var UPPERCASE_CHAR_CODES= arrayfromLowToHigh(65,90);
var LOWERCASE_CHAR_CODES= arrayfromLowToHigh(97,122);
var NUMBERS_CHAR_CODES= arrayfromLowToHigh(48, 57);
var SYMBOL_CHAR_CODES= arrayfromLowToHigh(33, 47).concat(
  arrayfromLowToHigh(58, 64)
).concat(
  arrayfromLowToHigh(91, 96)
).concat(
  arrayfromLowToHigh(123, 126)
)

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
  debugger
  var passwordlength= prompt("how many characters do you want in your password")
  var uppercase= confirm("do you want to include uppercase")

  var finalpassword= "hjhfjf"

  return finalpassword;
}

 function arrayfromLowToHigh(low, high){
  var array= []
  for (let i = low; i <= high; i++) {array.push(i)
  }
  return array
 }

  
