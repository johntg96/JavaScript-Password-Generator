const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacters = ['!', '”', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '~'];

const generateBtn = document.querySelector("#generate");

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

function generatePassword() {

  const password = {
    string: 'password-goes-here',
    characterLength: 0,
    lowerCase: true, // lowerCase is a property that is never used (yet)
    upperCase: true,
    specialCharacters: true
  };

  function updatePasswordRequirements() {
    let howManyCharacters = prompt(`How many characters?`);

    // password must be longer than 8 characters and shorter than 128
    while (parseInt(howManyCharacters) < 8 || parseInt(howManyCharacters) > 128) {
      if (parseInt(howManyCharacters) < 8) {
        alert(`Password must be at least 8 characters`)
        howManyCharacters = prompt('How many characters?');
      } else if (parseInt(howManyCharacters) > 128) {
        alert('Password must be shorter than 128 characters')
        howManyCharacters = prompt('How many characters?');
      } else {
        break;
      }
    }

    const includeUpperCase = confirm(`Do you want to include uppercase characters? (mixed case)`);
    const includeSpecialCharacters = confirm(`Special characters?`);

    password.characterLength = parseInt(howManyCharacters);
    password.upperCase = includeUpperCase;
    password.specialCharacters = includeSpecialCharacters;
  }

  function newPassword() {

    const newPassArray = [];
    // cycle through a for loop to choose a random character from a random array for each index value
    if (password.specialCharacters === true) {
      for (let i = 0; i < password.characterLength; i++) {
        // randomly decide which character array to choose random character from
        randomTypeChoice = getRandomInteger(3);
        //console.log(`randomTypeChoice: ${randomTypeChoice}`);
  
        if (randomTypeChoice === 0) {
          // add a random index value string from the alphabet array to newPassArra;
          // 50/50 chance letter chosen will be capitalized by the toUpperCase method.
          if (password.upperCase === true && getRandomInteger(2) === 0) {
            newPassArray[i] = alphabet[getRandomInteger(alphabet.length)].toUpperCase();
          } else {
            newPassArray[i] = alphabet[getRandomInteger(alphabet.length)];
          }
        } else if (randomTypeChoice === 1) {
          // add a random index value integer from the numbers array to newPassArray
          newPassArray[i] = numbers[getRandomInteger(numbers.length)];
        } else if (randomTypeChoice === 2) {
          // add a random index value special character from the specialCharacters array to newPassArray
          newPassArray[i] = specialCharacters[getRandomInteger(specialCharacters.length)];
        } else {
          // do nothing
        }
      }
    } 
    // If special characters are not wanted, then this logic is used to generate the password array without them.
    else {
      for (let i = 0; i < password.characterLength; i++) {
        randomTypeChoice = getRandomInteger(2);
        //console.log(`randomTypeChoice: ${randomTypeChoice}`);
        if (randomTypeChoice === 0) {
          if (password.upperCase === true && getRandomInteger(2) === 0) {
            newPassArray[i] = alphabet[getRandomInteger(alphabet.length)].toUpperCase();
          } else {
            newPassArray[i] = alphabet[getRandomInteger(alphabet.length)];
          }
        } else if (randomTypeChoice === 1) {
          newPassArray[i] = numbers[getRandomInteger(numbers.length)];
        } else {
          // do nothing
        }
      }
    }
    // joins the characters in the array that were chosen randomly to one string
    // updates password object string property value and returns it
    const newPassString = newPassArray.join('');
    password.string = newPassString;
    console.log(password.string);
    return password.string;
  }

  updatePasswordRequirements();
  const generatedPassword = newPassword();
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);