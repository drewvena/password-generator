// Assignment code here
document.getElementById('password')
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z']
var special = ['!','@','#','$','%','^','&','*','(',')','_','+','?','>','<',':','{','}','[',']',]
var num = [,'1','2','3','4','5','6','7','8','9','0',]
function generatePassword(){

var input;
input = prompt ("How many characters? between 8 and 128")
var passwordLength = input;
alert ('you have chosen' + input);
var charType = input;
input=prompt ('include which of the following? "lowercase" "uppercase" "numeric" "special characters"');
alert ('You have chosen' + input);
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
