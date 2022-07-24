// Assignment Code
var generateBtn = document.querySelector("#generate");
var password= document.querySelector("generatepassword");
var characterAmountNumber= document.querySelector("characterAmountNumber");
var includeNumbers= document.querySelector("includeNumbers");
var includeUppercase= document.querySelector("includeUppercase");
var includelowercase= document.querySelector("includelowercase");
var includesymbol= document.querySelector("includesymbol");

var randomfunction= {
  upper: getRandomupper,
  lower: getRandomlower,
  number: getRandomnumber,
  symbol: getRandomsymbol
};

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
function writePassword(characterAmountNumber, includeNumbers, includeUppercase, includelowercase, includesymbol) {
  var password = generatePassword();
  let generatedpassword= ''

  var typescount= characterAmount + number + upper + lower + symbol;

  var typesarray= [{characterAmount}, {number}, {upper}, {lower}, {symbol}].filter
  (
    item => Object.value(item)[0] 
  );

  if(typescount ===0) {
    return '';
  }

  for (i = 0; i < characterAmount; i+= typescount){
    typesarray.forEach(type =>{
      var functionName= object.keys(type)[0];

      generatedpassword += Randomfunction[functionName]();

    });
  }

  var finalpassword= generatedpassword.slice(0, characterAmount);

  return finalpassword;
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
generateBtn.addEventListener("click", () => {
  var characterAmount= characterAmountNumber.value
  var includeNumbers= includeNumberselement.checked
  var includeUppercase= includeUppercaseelement.checked
  var includesymbol= includesymbolelement.checked
  var password= genertepassword(characterAmount, includeNumbers, includeUppercase, includesymbol) 

password.innerText= generatepassword(
  characterAmount,
  number,
  upper,
  lower,
  symbol
);

});
