// Assignment code here
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',')','(','}','{',']','[','~','-','_','.'
];

var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var selectedCharacters = [];
function generatePassword(){
var passwordLength = prompt ("How many characters? between 8 and 128");
alert ('you have chosen ' + passwordLength);
if (passwordLength < 8 || length > 128) {
  alert ("length must be between 8 and 128!")
}
var LC = confirm("Use Lower case characters?");
var UC = confirm("Use Upper case characters?");
var N = confirm("Use Numeric characters?");
var SC = confirm("Use Special characters?");

if (LC == true || UC == true || N == true || SC == true){

  if (LC == true) {
    selectedCharacters += lowerCasedCharacters;
  } else {
    selectedCharacters=selectedCharacters;
  }

  if (UC == true) {
    selectedCharacters += upperCasedCharacters;
  }else {
    selectedCharacters=selectedCharacters;
  }

  if (N == true) {
    selectedCharacters += numericCharacters;
  }else {
    selectedCharacters=selectedCharacters;
  }

  if (SC == true) {
    selectedCharacters += specialCharacters;
  }else {
    selectedCharacters=selectedCharacters;
  }

console.log(selectedCharacters);
var retVal = "";
for (var i = 0; i < passwordLength; i++) { 
 retVal += selectedCharacters.charAt(Math.floor(Math.random()* selectedCharacters.length));
}
return retVal;
}
alert(generatePassword());
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
