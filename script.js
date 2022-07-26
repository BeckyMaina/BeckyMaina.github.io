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
  var passwordlength= prompt("how many characters do you want in your password?")

  var includeNumbers= confirm("do you want to include numbers?")

  var includeUppercase= confirm("do you want to include uppercase?")

  var includelowercase= confirm("do you want to include lowercase?")

  var includeSymbol= confirm("do you want to include symbols?")
  

  passwordEl = document.querySelector("#password");
  passwordEl.textContent = password;
  alert("this is your new password:  " + password)
  console.log(password);
}

