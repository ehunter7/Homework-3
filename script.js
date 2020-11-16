// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  //Calls funtion to randomly genereat password based on parameters
  var passwordText = document.querySelector("#password"); //selects the password id in html

  passwordText.value = password; //Displays password to page

}
function generatePassword(){
  //Code to generate password goes here  

  //Return Randomly generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
