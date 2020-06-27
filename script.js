 

// generate pass
function generate(){

//set password lenght/complexity
 let complexity = document.getElementById("slider").values;

//possibel password values 
values="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()+";

let password ="";

// create for loop
for(var i=8; i<=complexity;i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}



// add passwod to textbox area
document.getElementById("display").value= password;

// add to previous passwords
document.getElementById("lastpassword").innerHTML += "<br/>";

}

// set default length to 
document.getElementById("length").innerHTML="length: 20";

// function for tapered length
document.getElementById("slider").oninput= function(){
    if (document.getElementById("slider").value > 0){
        document.getElementById("lenght").innerHTML = "Length:" + document.getElementById("slider").value; 
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }
}