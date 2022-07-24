// Assignment Code
var generateBtn = document.querySelector("#generate");
var password= generatepassword("password");
var characterAmountNumber= document.querySelector("characterAmountNumber");
var includeNumbers= document.querySelector("includeNumbers");
var includeUppercase= document.querySelector("includeUppercase");
var includelowercase= document.querySelector("includelowercase");
var includesymbol= document.querySelector("includesymbol");
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
function writePassword() {
  var password = generatePassword(characterAmountNumber, includeNumbers, includeUppercase, includelowercase, includesymbol);
  let charcodes= LOWERCASE_CHAR_CODES
  if (includeUppercase) charcodes= charcodes.concat
  (UPPERCASE_CHAR_CODES)
  if (includeNumbers) charcodes = charcodes.concat(NUMBERS_CHAR_CODES)
  if (includeSymbol) charcodes= charcodes.concat(SYMBOL_CHAR_CODES)

  var passwordcharacters= []
  for (i = 0; i < characterAmount; i++){
    var characterCodes= charcodes[Math.floor(Math.random()* charcodes.length)]
    passwordcharacters.push(string.fromcharcodes(characterCodes))
  }
  return passwordcharacters.join('')
}

function arrayfromLowToHigh(low, high){
  var array= []
  for (let i = low; i <= high; i++) {array.push(i)
  }
  return array
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

criteria.addEventListener("submit" e =>{
  e.preventDefault()
  var characterAmount= characterAmountNumber.value
  var includeNumbers= includeNumberselement.checked
  var includeUppercase= includeUppercaseelement.checked
  var includesymbol= includesymbolelement.checked
  var password= genertepassword(characterAmount, includeNumbers, includeUppercase, includesymbol) 
})
