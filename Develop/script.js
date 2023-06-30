var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = ['!', '”', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '~'];

var generateBtn = document.querySelector("#generate");

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

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
    // cycle through a for loop to choose a random character from a random array for each index value
    if (password.specialCharacters === true) {
      for (i = 0; i < password.characterLength; i++) {
        // randomly decide which character array to choose random character from
        randomTypeChoice = getRandomInteger(3);
        console.log(`randomTypeChoice: ${randomTypeChoice}`);
  
        if (randomTypeChoice === 0) {
          // add a random index value string from the alphabet array to newPassArra;
          newPassArray[i] = alphabet[getRandomInteger(alphabet.length)];
        } else if (randomTypeChoice === 1) {
          // add a random index value integer from the numbers array to newPassArray
          newPassArray[i] = numbers[getRandomInteger(numbers.length)];
        } else if (randomTypeChoice === 2) {
          // add a random index value special character from the specialCharacters array to newPassArray
          newPassArray[i] = specialCharacters[getRandomInteger(specialCharacters.length)];
        } else {
          console.log(`error`);
        }
      }
    } 
    // If special characters are not wanted, then this logic is used to generate the password array without them.
    else {
      for (i = 0; i < password.characterLength; i++) {
        randomTypeChoice = getRandomInteger(2);
        console.log(`randomTypeChoice: ${randomTypeChoice}`);
        if (randomTypeChoice === 0) {
          newPassArray[i] = alphabet[getRandomInteger(alphabet.length)];
        } else if (randomTypeChoice === 1) {
          newPassArray[i] = numbers[getRandomInteger(numbers.length)];
        } else {
          console.log(`error`);
        }
      }
    }
    // joins the characters in the array that were chosen randomly to one string
    // updates string property value of password object and returns it
    const newPassString = newPassArray.join('');
    password.string = newPassString;
    console.log(password.string);
    return password.string;
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
