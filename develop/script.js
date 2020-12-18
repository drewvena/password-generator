// Assignment code here


function generatePassword(){
var passwordLength = Number(prompt ("How many characters? between 8 and 128"))
alert ('you have chosen ' + passwordLength);
var numbers = confirm ("Do you want numbers in your password?");
alert (`You Have Chosen ${numbers}`);
var lower = confirm ('Do you want lowercase letters?');
alert ("You have chosen " + lower);
var upper = confirm ("Do you want uppercaser letters?");
alert ("You have chosen " + upper)
var special = confirm ("Do you want Special Characters?");
alert ("You have chosen " + special)
};





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
