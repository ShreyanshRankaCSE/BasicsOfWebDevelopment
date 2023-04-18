// Variables provide a way to store values such as number, text, etc.
// Need: Variables capture the data which is stored in it.
// Declare: using 'let' Keyword
// Assign: 

// Variable Declare & Console Printing
let countOne = 40;
console.log(countOne);

let countTwo = 90;
console.log(countTwo);

let countTotal = countOne + countTwo;
console.log(countTotal);

// Camel-Casing & naming Conventions

let deAda = 123;

let basicsOfWebDev = 'Hope You are Ok'


//Assignment

let country = 'India';
let continent = 'Asia';
let population = '13000 M';

console.log(country);
console.log(continent);
console.log(population);

//Assignment

let isIsland = false;
let language;   // Undefined

console.log(isIsland);
console.log(language);

// 8 Types of datatypes
//1. String
//2. Number
//3. Boolean    True or False
//4. undefined  A datatype whose variable is not defined
//5. null       Just a keyword indicating null value
let myObj = null;
console.log(myObj);     // => Object

//6. BigInt
//7. Object     key-value pairs of collection of data
let myObject = {
    fName : 'Shreyansh',
    lName : 'Ranka'
}
console.log(myObject);

//8. Symbols

// const variables can not be reclared and updated.

// variable Declaration : Using these keywords: Var, let, const
// Const : Maintain Constain Values
// var : Globally and local/function scoped

var name = 'SR';
function ABC(){
    var fname='Shreyansh';
    console.log(fname);
}

console.log(name);
//console.log(fname);

// var vaiables can be redeclared and updated.
var name = 'AB'; //redeclared
console.log(name);
name = 'CD';    //updated
console.log(name);

//let
// let is more preferred for variable declaration
// let is block scoped ()
// A block is a piece of code bounded by {}
// Anything wwithin these Curly Braces is a block
 
let Obje = 'Abc';
function ABCD(){
    Obj1 = 'SS';
    console.log(Obj1);
}
console.log(Obje);
// console.log(Obj1); -> Error

// let can be reupdated  but can't be reclared
Obje = 'CD';    //updated
console.log(Obje);
//let Obje = 'AB'; //redeclared
console.log(Obje);

// Operators

// a++, a+2, a--, 

// == Equals to , != Not equals to, === Strict Equals to
var l = 2;
const  m = 2;
console.log(l==m);
console.log(l!=m);
console.log(l==='2');
console.log(l===m);

// Logical AND &&, Logical OR ||
const x= 3; y=2;
console.log((x>1) && (y<5));
console.log((x>1) || (y<5));

// Not !
console.log(!(x<5));

//Reference Error -> Variables that does not exist
//Syntax Error -> Error caused by incorrect use of predefined syntax
//

// Ternary Operator or Conditional Operator
// condition ? "do something" if you condition is satisifed : otherwise do this

let num1= 36;
( num1 % 2 == 0 ? console.log("No. is Even") : console.log("No. is odd"))  

// Template literals are literals delimited with backtick ( ` ) characters, allowing for multi-line strings,
// string interpolation with embedded expressions, and special constructs called tagged templates.

// String Interpolation  String interpolation is replacing placeholders with values in a string literal. 
//The string interpolation in JavaScript is performed by template literals (strings wrapped in backticks ` ) 
//and ${expression} as a placeholder

let myFName = "Shreyansh";
let myLName = "Ranka";
let myName = `My Name is ${myFName} ${myLName}`;
console.log(myName);
 
// Multi line text
let Naming = `Hi Everyone, 
Every day is 
the new day`;
console.log(Naming);

// <------ Switch Statement ----> 

const myNumber = 40;
switch (myNumber) {
    case 1: console.log("My Number is 1");        
            break;
    case 2: console.log("My Number is 2");        
            break;
    case 4: console.log("My Number is 4");        
            break;
    default: console.log("Your number is not foound");
}

const day = "Sunday";
switch(day){
    case "Monday" : console.log("Today is Monday");
                  break;
    case "Tuesday" : console.log("Today is Tuesday");
                  break;
    case "Wednesday" : console.log("Today is Wednesday");
                  break;
    case "Thursday" : console.log("Today is Thursday");
                  break;
    case "Friday" : console.log("Today is Friday");
                  break;
    default : console.log(`Today is Weekend !! Which is going to end very soon`);
}