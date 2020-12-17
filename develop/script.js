// Assignment code here
document.getElementById('password')

var input;
input = Number(prompt ("How many characters? between 8 and 128"))
var passwordLength = input;
alert ('you have chosen' + input);
var charType = prompt ('include which of the following? "lowercase" "uppercase" "numeric" "special characters"');
alert ('You have chosen' + charType);
function generatePassword(){
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
