// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password")


  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


  var resultsArray = [];
  var userArray = [];

  uppercaseArray [1]

  var numCharacter = confirm ("How many number of Characters do you want between 8 and 128?");
  var numbers = confirm ("Do you want numbers in your password?");
  var uppercases = confirm ("Do you want Uppercases in your password?");
  var lowercases = confirm ("Do you want lowercases in your password?");
  var characters = confirm ("Do you want special characters in your password?");
}

if (numbers){
  resultArray = resultArray.concat(numbArray);
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray)
}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++){
      
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}

password.value = randomString;

 

// Write password to the #password input
function writePassword(characterAmount, IncludeUppercase, IncludeNumbers, IncludeSymbols)
 {
  var pwTextArea = document.getElementById("password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
