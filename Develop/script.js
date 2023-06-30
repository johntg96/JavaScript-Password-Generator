var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = ['!', '”', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '~'];

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var password = {
    string: 'password-goes-here',
    characterLength: 0,
    specialCharacters: true
  };

  function updatePasswordRequirements() {
    howManycharacters = prompt(`How many characters?`);
    includeSpecialCharacters = confirm(`Special characters?`);

    password.characterLength = parseInt(howManycharacters);
    password.specialCharacters = includeSpecialCharacters;

    console.log(password);
  }

  function newPassword() {

    const newPassArray = [];
    // cycle through a for loop to choose a random character for each index value

    if (password.specialCharacters === true) {
      for (i = 0; i < password.characterLength; i++) {
        randomTypeChoice = Math.floor(Math.random() * 3);
        console.log(`randomTypeChoice: ${randomTypeChoice}`);
  
        if (randomTypeChoice === 0) {
          // add a random index value string from the alphabet array to newPass
          newPassArray[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
        } else if (randomTypeChoice === 1) {
          // add a random index value integer from the numbers array to newPass
          newPassArray[i] = numbers[Math.floor(Math.random() * numbers.length)]
        } else if (randomTypeChoice === 2) {
          // add a random index value special character from the specialCharacters array to newPass
          newPassArray[i] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        } else {
          console.log(`error`);
        }
      }
    } else {
      for (i = 0; i < password.characterLength; i++) {
        randomTypeChoice = Math.floor(Math.random() * 2);
        console.log(`randomTypeChoice: ${randomTypeChoice}`);
  
        if (randomTypeChoice <= 0) {
          // add a random index value string from the alphabet array to newPass
          newPassArray[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
        } else if (randomTypeChoice === 1) {
          // add a random index value integer from the numbers array to newPass
          newPassArray[i] = numbers[Math.floor(Math.random() * numbers.length)]
        } else {
          console.log(`error`);
        }
      }
    }
    console.log(newPassArray);
    const newPassString = newPassArray.join('');
    console.log(newPassString);
    return newPassString;
  }

  updatePasswordRequirements();
  var generatedPassword = newPassword();
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
