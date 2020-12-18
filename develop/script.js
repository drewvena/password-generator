// Assignment code here


function generatePassword(){
var passwordLength = prompt ("How many characters? between 8 and 128");
alert ('you have chosen ' + passwordLength);
var numbers = confirm ("Do you want numbers in your password?");
alert (`You Have Chosen ${numbers}`);
var lower = confirm ('Do you want lowercase letters?');
alert ("You have chosen " + lower);
var upper = confirm ("Do you want uppercaser letters?");
alert ("You have chosen " + upper)
var special = confirm ("Do you want Special Characters?");
alert ("You have chosen " + special)

var charSet = "";
if (numbers=true){
  charSet = "0123456789";
}
 if(lower =true){
  charSet="abcdefghijklmnopqrstuvwxyz";
}  
if (upper=true){
  charSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (special=true){
  charSet= "!@#$%^&*()_-+=}{[]\`|~?/;:'";
};
var value = "";
for (var i = 0; i < passwordLength; i++) { 
 value += charSet[Math.floor(Math.random()* charSet.length)];
}
return value;
}
alert(generatePassword()); 
generatePassword();





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
