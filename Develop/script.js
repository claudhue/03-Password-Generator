var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberCharacters = "123456789".split("");
var symbolCharacters = "!@#$%^&*()=+/-".split("");
var passwordCharacters;

function generatePassword() {
  var passwordLength;
  do {
    passwordLength = prompt("Select a password length between 8 and 128?");
    console.log(passwordLength);
  } while (passwordLength < 8 || passwordLength > 128);

  var includeLowercase = confirm("Password will include lowercase letters");
  if (includeLowercase == true) {
    passwordCharacters = lowercaseCharacters + passwordCharacters;
  }

  var includeUppercase = confirm("Do you want to include uppercase letters?");
  if (includeUppercase == true) {
    passwordCharacters = uppercaseCharacters + passwordCharacters;
  }

  var includeNumbers = confirm("Do you want to include numbers?");
  if (includeNumbers == true) {
    passwordCharacters = numberCharacters + passwordCharacters;
  }

  var includeSymbols = confirm("Do you want to include symbols?");
  if (includeSymbols == true) {
    passwordCharacters = symbolCharacters + passwordCharacters;
  }

  for (let i = 0; i < passwordLength - 1; i++) {
    Math.floor(Math.random() * passwordCharacters.length);
  }
  var password = passwordCharacters[i];
  password = password + passwordCharacters[i];
}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", generatePassword);

// Assignment Code
// Write password to the #password input
// Add event listener to generate button
//if user allows uppercase
//generate random uppercase letters
//append some uppercase letters to the textarea (or wherever)
