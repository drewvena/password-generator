// Assignment code here
var specialCharacters = [
  " ","!","#","$","%","^","&","*","(",")","+",",","-",".","/",":",";","<","=",">","?","@","[","]","_","`","~","{","}","|",];

var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var numericCharacters = [0,1,2,3,4,5,6,7,8,9];

var selectedCharacters = [];
function generatePassword(){
var passwordLength = prompt ("How many characters? between 8 and 128");
alert ('you have chosen ' + passwordLength);
if (passwordLength < 8 || length > 128) {
  alert ("length must be between 8 and 128!")
}
var lowerCase = confirm("Use Lower case characters?");
var upperCase = confirm("Use Upper case characters?");
var numbers = confirm("Use Numeric characters?");
var special = confirm("Use Special characters?");

if (lowerCase == true || upperCase ==true || numbers == true || special == true){

  if (lowerCase = true) {
    selectedCharacters += lowerCasedCharacters;
  } else if (lowerCase==false) {
    selectedCharacters+=upperCasedCharacters,specialCharacters,numericCharacters;
  };

  if (upperCase = true) {
    selectedCharacters += upperCasedCharacters;
  }else if (upperCase==false){
    selectedCharacters+=lowerCasedCharacters,numericCharacters,specialCharacters;
  };

  if (numbers == true) {
    selectedCharacters += numericCharacters;
  }else if (numbers==false){
    selectedCharacters+=upperCasedCharacters+specialCharacters+upperCasedCharacters;
  };

  if (special == true) {
    selectedCharacters += specialCharacters;
  }else if (special==false){
    selectedCharacters+=numericCharacters+=upperCasedCharacters+=lowerCasedCharacters;
  };
  

console.log(selectedCharacters);
var retVal = "";
for (var i = 0; i < passwordLength; i++) { 
 retVal += selectedCharacters.charAt (Math.floor(Math.random()* selectedCharacters.length));
}
return retVal;
}
generatePassword;
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
