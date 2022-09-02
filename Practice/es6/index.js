// LET KEYWORD
let x = 10;
x = 2;
console.log(x);
document.write(x + "<br>");

let a = "Hiral";
{
    let a = 12;
}
console.log(a);
document.write(a + "<br>");
// LET KEYWORD-END


// CONST KEYWORD
const z = 12;
const y = "Welcome";
{
    const z = "1rivet";
    console.log(z);
    document.write(z + "<br>");
    console.log(y);
    document.write(y + "<br>");
}
console.log(z);
document.write(z + "<br>");
// CONST KEYWORD-END


// LET-VAR-CONST KEYWORD
{
    let f_name = 'HIRAL';
    const ZIP = 500067;
    var age = 25;
}

// console.log(f_name);
// document.write(f_name + "<br>"); 
// console.log(ZIP);  
// document.write(ZIP + "<br>");
// console.log(age);  
document.write(age + "<br>");
// LET-VAR-CONST KEYWORD-END


// LET-VAR-CONST KEYWORD WITH FUNCTION
let f_name = "Kiran";
 const ZIP = 396191;
 var age = 27;  

function details() {
  console.log(f_name); 
  console.log(ZIP); 
  console.log(age);  
}
details();

console.log(f_name); 
console.log(ZIP); 
console.log(age);  
// LET-VAR-CONST KEYWORD WITH FUNCTION-END


// LET-VAR-CONST KEYWORD REASSIGN VALUE
let firstname = "Alex";
// const num = 777000;
var gender = "female";

// Reassign values
firstname = "ragen"; 
// num = 65457; 
gender = "male"; 

console.log(firstname); 
document.write(firstname + "<br>");
// console.log(num); 
// document.write(num + "<br>");
console.log(gender);  
document.write(gender + "<br>");
// LET-VAR-CONST KEYWORD REASSIGN VALUE-END