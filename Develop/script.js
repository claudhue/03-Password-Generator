// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordLength = prompt("What is the length of the password?")
console.log(passwordLength)
var randomIndex = Math.floor(Math.random()*passwordLength)

var includeLowercase = confirm("Password will include lowercase letters")
if(includeLowercase == true)

var includeUppercase = confirm("Do you want to include uppercase letters?");
if(includeUppercase == true)

var includeNumbers = confirm("Do you want to include numbers?");
if(includeNumbers == true)

var includeSymbols = confirm("Do you want to include symbols?");
if(includeSymbols == true)

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberCharacters = "123456789".split("");
var symbolCharacters = "!@#$%^&*()=+/-".split("");

generateBtn.addEventListener("click", writePassword);

function writePassword(e) {
    const value = e.target.value
    passwordLength.value = value
}
// Write password to the #password input
// Add event listener to generate button
//if user allows uppercase
  //generate random uppercase letters
  //append some uppercase letters to the textarea (or wherever)