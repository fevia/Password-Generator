// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
    var passwordLength = prompt("Enter the number of characters you want for your new password.  It must be more than 8 but less than 128.");
    var numbers = confirm("Would you like numbers in your password?");
    var lowerCases = confirm("Would you like lowercases in your password?");
    var upperCases = confirm("Would you like uppercases in your password?");
    var special = confirm("Would you like special characters in your password?");
    var minimumCount = 0;
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
