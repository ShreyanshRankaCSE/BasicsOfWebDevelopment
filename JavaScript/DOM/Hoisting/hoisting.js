// JavaScript (Just-in-Time Compilation)

// Every internet browser has diff. JS Engine which is responsibe for executing the JS Code
// Chroms uses v8 Engine (JS Engine) to execute JS Code.

// Compilation : Whole code executes at a time.
// Interpretation: Line-by-Line Code gets executes.

// JS is Interpreted Language (line-by-line code gets executes)  -> Time Taking

// So JS Engine uses both Compilation & Interpretation which is called Just-in-Time Compilation.

// Just-in-Time(JIT) Compilation: Whole Code compiles in Machine Language and gets executed line-by-line

// When JS Engine executes the JS Code, it creates Global Execution Context (GEC)

// GEC has 2 Phases: 
// 1. Creation Phase 
// 2. Execution Phase
// Hoisting: Hoisting is JS default behaviour of moving declarations to the top of the code before execution

// Variable Hoisting: During GEC, In Creation Phase a Variable is declared (Allocates the memory) but not initialised which gives Undefined.

// console.log(doc);  // Undefined
// var doc = 1; 	

// console.log(doc);   // 1

// console.log(doc);  // Reference Error on Console
// let doc = 1; 	

// console.log(doc);  // Syntax Error on Console, Code will not run
// const doc = 1; 	

// Hoisting Normal Function 

let num1 = 6;
let num2 = 7;

console.log(add(num1, num2)); // Working Normally

function add(a,b){
    return a + b;
}

// Hoisting Arrow Function 

let num3 = 6;
let num4 = 7;

//console.log(add1(num3, num4));  // Reference Error on Console

let add1 = (a,b) => a+b;

// Hoisting Function Expression

let num5 = 6;
let num6 = 7;

console.log(add2(num5, num6));   // Reference Error on Console

let add2 = function(a,b){
    return a + b;
}

//Temporal Dead Zone: Variable is In-Accesible in that Zone. TDZ is created bcoz of Hoisting

//TDZ starts here
//console.log(object); // Reference Error

let object = "Heyy"; // TDZ ends here

console.log(object);

// JS Call Stack

// Function Execution Context (FEC)
// When JS Engine executes the JS Code, it creates Global Execution Context (GEC)
// GEC creates FEC
//https://www.javatpoint.com/javascript-call-stack
function sum(a,b){ return a + b;}

function mean(a,b){ return sum(a,b) / 2;}

console.log(mean(1,2));