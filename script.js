// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
/*I need to make an if statement, how long the characters should be and refreshing the page  */
/*It needs to be 8 to 128 characters long*/
function generatePassword () {
  var myGeneratedPassword = "";
  var uppercaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";
  var symbols = "~`@#$%^&*()_>-=+;:',<./?\|[]{}";
  var numbers = "0123456789";
  var length =
 /*Checking to see what myGeneratedPassword does in the console */
  console.log(myGeneratedPassword);


  return myGeneratedPassword;
}
/*I need a alert*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);