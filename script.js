// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthInput = document.getElementById("number");
var uppercaseInput = document.getElementById("uppercase");
var numericInput = document.getElementById("numeric");
var specialInput = document.getElementById("special");

var plength = lengthInput.value;
var uppercase = false;
var numeric = false;
var special = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  //Calls funtion to randomly genereat password based on parameters
  var passwordText = document.querySelector("#password"); //selects the password id in html

  passwordText.value = password; //Displays password to page
}

function generatePassword(){
  //Code to generate password goes here  
  var password = "";  //Empty array to fill
  var charset = "abcdefghijklmnopqrstuvwxyz"; //character arrays to pull from
  var ucharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numset = "0123456789";
  var specset = "!@#$%^&*"

    for(var x = 0; x < lengthInput.value; x++){
    password += charset.charAt(Math.floor(Math.random() * charset.length));
    
  }

  if(uppercase){ //check if uppercase checkbox is true
    var randomNumber = getRand(ucharSet.length);
    console.log(randomNumber);
    password = replaceAt(password,getRand(lengthInput.value),ucharSet.charAt(getRand(ucharSet.length)));
  }

  //need to check random number not to run again
  if(numeric) { //check if numeric checkbox is true
    var randomNumber = getRand(numset.length);
    console.log(randomNumber);
    password = replaceAt(password,getRand(lengthInput.value),numset.charAt(getRand(numset.length)));
  }

  //need to check random number not to run again
  if(special){  //check if special checkbox is true
    randomNumber = getRand(specset.length);
    console.log(randomNumber);
    password = replaceAt(password,getRand(lengthInput.value),specset.charAt(getRand(specset.length)));
  }
  //Return Randomly generated password
  return password;
}
//Function that replaces charater in string at given index
function replaceAt(string, index, char) {
  if(index > string.length-1) return string;
  return string.substring(0,index) + char + string.substring(index+1);
}
//function to produce random number
function getRand(length){ 
  return Math.floor(Math.random() * length);
}
//gets geted condition from check boxs
uppercaseInput.addEventListener("click", function(){
  if(!uppercase)
    uppercase = true;
  else
    uppercase = false
});
numericInput.addEventListener("click", function(){
  if(!numeric)
    numeric = true;
  else
    numeric = false;
});
specialInput.addEventListener("click", function(){
  if(!special)
    special = true;
  else
    special = false
});

//event listener to generate button

//event listener to assign form values
generateBtn.addEventListener("click", function(){
  console.log("This is a test!"); //console logs for testing purpose
  console.log(plength);
  console.log(uppercase);
  console.log(numeric);
  console.log(special);
  writePassword(); //call function to display password
})

