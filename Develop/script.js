// Assignment Code
// global variables
// var howManyCharacters;

var generateBtn = document.querySelector("#generate");

function generatePassword() {

} // possibly (probably should), use multiple functions.

// function askHowManyCharacters() {

// }

// function askAboutSpecialCharacters() {

// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
