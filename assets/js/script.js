// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCases = 'abcdefghijklmnopqrstuvwxyz';
var upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbol = "!#$%&()*+,-.:;<=>?@^_`~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for password setup
function generatePassword() {
  var passwordCharSet = "";
  var length = prompt("Enter password length 8 to 128.");
  
  var wantsNumbers = confirm("Do you want numbers in your password?");
  if (wantsNumbers) {
    passwordCharSet += numbers;
  }

  var wantsLowerCases = confirm("Do you want lowercases in your password?");
  if (wantsLowerCases) {
    passwordCharSet += lowerCases;
  }

  var wantsUpperCases = confirm("Do you want uppercases in your password?");
  if (wantsUpperCases) {
    passwordCharSet += upperCases;
  }

  var wantsSymbol = confirm("Do you want special characters in your password?");
  if (wantsSymbol) {
    passwordCharSet += symbol;
  }

var randomPasswordGenerated = "";
// Formula for password generator
for (let i = 0; i < length; i++) {
  
  randomPasswordGenerated += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
}
return randomPasswordGenerated;

}
// Password length  alert
if (generatePassword.length < 8 || generatePassword.length > 128) {
  alert("Password length must be 8 and 128 characters");
}
