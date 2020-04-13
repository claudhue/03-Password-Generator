var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberCharacters = "123456789".split("");
var symbolCharacters = "!@#$%^&*=+-".split("");
var passwordCharacters = [];
var finalPassword = "";
console.log(symbolCharacters);

function generatePassword() {
  finalPassword = "";

  var passwordLength;
  do {
    passwordLength = prompt("Select a password length between 8 and 128?");
    console.log(passwordLength);
  } while (passwordLength < 8 || passwordLength > 128);

  var includeLowercase = confirm("Password will include lowercase letters");
  if (includeLowercase == true) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
    console.log(passwordCharacters);
  }

  var includeUppercase = confirm("Do you want to include uppercase letters?");
  if (includeUppercase == true) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
  }

  var includeNumbers = confirm("Do you want to include numbers?");
  if (includeNumbers == true) {
    passwordCharacters = passwordCharacters.concat(numberCharacters);
  }

  var includeSymbols = confirm("Do you want to include symbols?");
  if (includeSymbols == true) {
    passwordCharacters = passwordCharacters.concat(symbolCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    
    finalPassword = finalPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  document.getElementById("password").value = finalPassword;
  console.log(passwordCharacters);
}


var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", generatePassword);