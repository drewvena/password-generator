// Assignment code here


function generatePassword(){
var input;
input = Number(prompt ("How many characters? between 8 and 128"))
var passwordLength = input;
alert ('you have chosen ' + input);
var numbers = confirm ("Do you want numbers in your password?");
alert ('You have chosen ' + numbers);
var lower = confirm ('Do you want lowercase letters?');
alert ("You have chosen " + lower);
var upper = confirm ("Do you want uppercaser letters?");
alert ("You have chosen " + upper)

var password = {
  getInput: function
}
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
