

var lowercasealphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Uppercasealphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var special = [ '!','"', '#','$', '%','&','(',')','*','+','-',"'",'.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']; 



function generaterandomPassword() {
    var newCharacterlist=[];
    var verifyLowerCase=confirm("Would you like to incude Lower Case letters in your password (click OK for YES and Cancel for NO)");
    var verifyUpperCase=confirm("would you like to include Upper Case letters in your password (click OK for YES and Cancel for NO)");
    var verifyNumbers=confirm("would you like to include numbers in your password (click OK for YES and Cancel for NO)");
    var verifySpecial=confirm("would you like to include special characters in your passwords (!@#$ (click OK for YES and Cancel for NO)");
    while (verifyLowerCase == false && verifyUpperCase == false && verifyNumbers == false && verifySpecial == false) {
        alert("You must pick atleast one type");
        verifyLowerCase=confirm("Would you like to incude Lower Case letters in your password (click OK for YES and Cancel for NO)");
        verifyUpperCase=confirm("would you like to include Upper Case letters in your password (click OK for YES and Cancel for NO)");
        verifyNumbers=confirm("would you like to include numbers in your password (click OK for YES and Cancel for NO)");
        verifySpecial=confirm("would you like to include special characters in your passwords (!@#$ (click OK for YES and Cancel for NO)");
    }


    var choosepasswordLength=parseInt(prompt("Please pick the characters you like and make sure they are between 8 and 128"));
    while(choosepasswordLength < 8 || choosepasswordLength > 128) {
        alert("Please choose a number between 8 and 128");
        choosepasswordLength=parseInt(prompt("Please pick the characters you like and make sure they are between 8 and 128"));
    } 
    if (verifyLowerCase){
        newCharacterlist = newCharacterlist.concat(lowercasealphabets);
    }
    if (verifyUpperCase){
        newCharacterlist = newCharacterlist.concat(Uppercasealphabets);
    }
    if (verifyNumbers){
        newCharacterlist = newCharacterlist.concat(numbers);
    }
    if (verifySpecial){
        newCharacterlist = newCharacterlist.concat(special);
    }
    var passwordString=""
    for (var i = 0; i < choosepasswordLength; i++) {
        passwordString = passwordString + newCharacterlist[Math.floor(Math.random() * newCharacterlist.length)];
    }
    passwordEntry.textContent=passwordString;    
}

var generateButton= document.getElementById("generate");
var passwordEntry= document.getElementById("password");
generateButton.onclick = generaterandomPassword;