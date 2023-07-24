// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  /*clears the password*/
  passwordText.value = password;
  /*Displays Password Text*/
  passwordText.append(password);
  /*I need a place to save/store the password using local storage */
  localStorage.setItem("theGeneratedPassword", password);

}
/*I need to make an if statement, how long the characters should be and refreshing the page  */
/*It needs to be 8 to 128 characters long*/
function generatePassword () {
  var myGeneratedPassword = "";
  var uppercaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters ="abcdefghijklmnopqrstuvwxyz";
  var symbols = "~`@#$%^&*()_>-=+;:',<./?\|[]{}";
  var numbers = "0123456789";
  /*Prompt is like an alert and confirm they all display a msg except prompt  */
  var length = parseInt(prompt("Enter password length between 8 to 128 Characters!"));
  /*Added a variable to have an empty string as placeholder for the random password */
  var newPassword = "";
  //preventDefault();

  /*Checking to see what myGeneratedPassword does in the console */
  console.log(myGeneratedPassword);

  var newPassword = generatePassword([uppercaseLetters + lowercaseLetters + symbols + numbers]);
 /*This statement says if its equal to or between 8 and 128 it will include variables lowerCase,
 uppercaseLetters, symbols,and numbers */
  if(length >= 8 && length <= 128) {
    /*confirm displays the message of the categories the user wants to include in the generated password*/
    var addUpperCase = confirm("Need upperCase Letters?");
    var addLowerCase = confirm("Need lowerCase Letters?");
    var addSymbols = confirm("Need symbols?");
    var addNumbers = confirm("Need upperCase Letters?");
  }
 
  /*This displays the alert to chose a password if there isnt any characters selected */
  if (newPassword !== (addUpperCase || addLowerCase || addSymbols || addNumbers)) {
   alert("Please choose one of Character types for your password!");
    return;
  }
  /*the if statement adds that the random password will have the value of uppercase letters, lowercase letters,
  symbols, and numbers if the user selects that type*/
  if (addUpperCase) {
      randomPassword += addUpperCase;
  }
  if (addLowerCase) {
      randomPassword += addLowerCase;
  }
  if (addSymbols) {
      randomPassword += addSymbols;
  }
  if (addNumbers) {
      randomPassword += addNumbers;
  }

/*for loop if the value is <= the new length it will create a password with random characters based on the password length*/
  for(var i=0; i <= newPassword.length; i++) {
  const randomPassword = Math.floor(Math.random() * newPassword.length);
  myGeneratedPassword += newPassword[randomPassword];
  /*When it reaches 128 or over 128 it pops up the alert msg */  
  } if (newPassword >= 128) {
    alert("You Have Reached the Maximum Character length!");
  
/*I need to generate a random password*/
  return myGeneratedPassword;
}else{
/*I need a alert for the password after displaying or not displaying at all*/
alert("Please Enter a password between 8 to 128 characters!");
}}

/*Ill use an event listener to get the password from local stoarge */
window.addEventListener("load", function() {
  var theGeneratedPassword = localStorage.getItem("theGeneratedPassword");
  if (theGeneratedPassword) {
    /*I need to get the generated password to id of password and append the text created to show up there*/
    var passwordText = document.querySelector("#password");
    passwordText.append(theGeneratedPassword);
  }
})
localStorage.getItem("theGeneratedPassword");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);