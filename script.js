// Assignment Code
var generateBtn = document.querySelector("#generate");

var UPPERCASE_CHAR_CODES= (65,90);
var LOWERCASE_CHAR_CODES= (97,122);
var NUMBERS_CHAR_CODES= (48, 57);
var SYMBOL_CHAR_CODES= ((33, 47), (58, 64), (91, 96), (123, 126));

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  debugger
  var passwordlength= prompt("how many characters do you want in your password", min= 8, max= 128)
  var numbers= confirm("do you want to include numbers")
  var uppercase= confirm("do you want to include uppercase")
  var lowercase= confirm("do you want to include lowercase")
  var symbols= confirm("do you want to include symbols")

  var finalpassword= ""

    

  return finalpassword;
}
