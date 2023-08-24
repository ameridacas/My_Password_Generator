// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  /*clears the password*/
  passwordText.value = password; //this so it works with the read only attribute on html
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
  var lengthInput = prompt("Enter password length between 8 to 128 Characters!");
  var length = parseInt(lengthInput); //converts input into an integer
 
  if (!(/^\d+$/.test(lengthInput))) { //this makes sure the user enters a number not letters or symbols
    alert("Please enter a numeric password length!");
    return ""; // Empty string
  }
  //preventDefault();

  /*Checking to see what myGeneratedPassword does in the console */
  //console.log(myGeneratedPassword);

 /*This statement says if its equal to or between 8 and 128 it will include variables lowerCase,
 uppercaseLetters, symbols,and numbers */
  if(length <= 7 || length >= 129) { //This displays the message if the user enters a number length <=7 or >=129 if the length is between 8-128 the input will be valid
    /*I need a alert for the password after displaying or not displaying at all*/
    alert("Please Enter a password between 8 to 128 characters!");
    return ""; //Empty string
    }

    /*confirm displays the message of the categories the user wants to include in the generated password*/
    var addUpperCase = confirm("Need upperCase Letters?");
    var addLowerCase = confirm("Need lowerCase Letters?");
    var addSymbols = confirm("Need symbols?");
    var addNumbers = confirm("Need numbers?");
  
 
  /*This displays the alert to chose a password if there isnt any characters selected */
  if (!(addUpperCase || addLowerCase || addSymbols || addNumbers)) {
   alert("Please choose one of Character types for your password!");
   return "";
  }

   /*Added a variable to have an empty string as placeholder for the random password */
   var newPassword = "";
  /*the if statement adds that the random password will have the value of uppercase letters, lowercase letters,
  symbols, and numbers if the user selects that type*/
  if (addUpperCase) {
      newPassword += uppercaseLetters;
  }
  if (addLowerCase) {
      newPassword += lowercaseLetters;// adding string to the var
  }
  if (addSymbols) {
      newPassword += symbols;
  }
  if (addNumbers) {
      newPassword += numbers;
  }

/*for loop if the value is <= the new length it will create a password with random characters based on the password length*/
  for(var i=0; i <= newPassword.length; i++) {
  const randomPassword = Math.floor(Math.random() * newPassword.length);
  myGeneratedPassword += newPassword[randomPassword];

  /*When it reaches 128 or over 128 it pops up the alert msg */  
  } if (myGeneratedPassword.length >= 128) {
    alert("You Have Reached the Maximum Character length!");
  }
/*I need to generate a random password*/
  return myGeneratedPassword;
}

/*Ill use an event listener to get the password from local stoarge */
window.addEventListener("load", function() {
  var theGeneratedPassword = localStorage.getItem("theGeneratedPassword");
  if (theGeneratedPassword) {
    /*I need to get the generated password to id of password and append the text created to show up there*/
    var passwordText = document.querySelector("#password");
    passwordText.append(theGeneratedPassword);
  }
});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);