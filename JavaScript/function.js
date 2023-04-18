// Function : We use it to stop ourselves writing redundant code.... Used in camelCasing

function checkOddOrEven (num) {
    if (num % 2 == 0)
    console.log("Even Number");
    else
    console.log("Odd Number");
}

checkOddOrEven(50);
checkOddOrEven(11);
checkOddOrEven(40);

//function name(parameter1, parameter2,...){
//  Block Of Code    
//}

// Addition a and b

function addition(num1, num2){
   // console.log(num1 + num2);
   return (num1 + num2);
}
console.log(addition(2,4));
//addition(222,1);

// Largest of 3 no.

function findLargest (a,b,c){
    if (a>b && a>c)
    return (a + " is Largest");
    else if (b>a && b>c)
    return (b + " is Largest");
    else return (c + " is Largest");
}

console.log(findLargest(9,5,7));
console.log(findLargest(99,55,822));

// Percentage - Grade Checker

function gradeChecker (m1,m2,m3,m4,m5) {
    let totalMarks = 500;
    let percent = ((m1+m2+m3+m4+m5) * 100) / totalMarks;
    if(percent >= 90) return ("Grade A");
    else if(percent >= 80) return ("Grade B");
    else if(percent >= 70) return ("Grade C");
    else if(percent >= 60) return ("Grade D");
    else return ("Grade E ->  Fail");
}

console.log(gradeChecker(50,60,80,90,95));
console.log(gradeChecker(90,90,90,90,95));
console.log(gradeChecker(40,40,30,20,45));

// Square of a Number

function square(num){
    return (num * num);
}

console.log(square(3));
console.log(square(25));
console.log(square(11));
console.log(square(121));

// Find a no. in range

function rangeChecker (num){
    if (num > 100 && num < 200)
    return (num + " Falls in 100 - 200 Range");
    else if (num > 200 && num < 300)
    return (num + " Falls in 200 - 300 Range");
    else if (num > 300 && num < 400)
    return (num + " Falls in 300 - 400 Range");
    else if (num > 400 && num < 500)
    return (num + " Falls in 400 - 500 Range");
    else if (num < 100 && num > 0)
    return (num + " Falls in 0 - 100 Range");
    else return (num + " is a 500 + Number");
}

console.log(rangeChecker(101));
console.log(rangeChecker(51));
console.log(rangeChecker(201));
console.log(rangeChecker(301));
console.log(rangeChecker(401));
console.log(rangeChecker(501));

// Temparature Convert C -> F

function Temparature(fTemp)
{
    return ((9*fTemp)/5 + 32);
}

console.log(Temparature(180));
console.log(Temparature(0));
console.log(Temparature(50));

// Area of Rectangle

function areaRectangle(l,b){
    return (l * b);
}
console.log(areaRectangle(50,40));
console.log(areaRectangle(10,4));
console.log(areaRectangle(100,10));

// Area & Perimeter of Circle

function areaOfCircle(radius){
    return (Math.PI * radius * radius);
}
function perimeterOfCircle(radius){
    return (Math.PI * 2 * radius);
}

console.log("Circle's Area is " + areaOfCircle(20) + " & Perimeter is " + perimeterOfCircle(20) + " With 20 as Radius");
console.log("Circle's Area is " + areaOfCircle(15) + " & Perimeter is " + perimeterOfCircle(15) + " With 15 as Radius");
console.log("Circle's Area is " + areaOfCircle(100) + " & Perimeter is " + perimeterOfCircle(100) + " With 100 as Radius");

// Equality Check

function equal(a,b){
  return ( a == b ? (a + " &" + b + " Are Equal.") : (a + " & " + b + " Are Not Equal."));
}

console.log(equal(5,7));

// Function Expression ==================================== Function stored in a variable

let hello = function(){
    alert("Hello");
}
hello();

// Temparature Convert C -> F

let tempF = function(tempC){
    return ((tempC*9)/5)+32;
}
console.log(tempF(0));

// Area of Rectangle

let areaR = function(l,b){
    return (l*b);
}
console.log(areaR(2,2));

// Area & Perimeter of Circle
let areaAP =  function(rad){
    // return {
    //     "Area is " : (Math.PI*rad*rad),
    //     " Perimeter is " : (2*Math.PI*rad),
    // };

    // return ("Area & Periemter is " + rad*rad*Math.PI + " &" + 2*rad*Math.PI);

    let area = rad*rad*Math.PI;
    let perimeter = 2*rad*Math.PI;
    let result = `Area & Periemter is ${area} and ${perimeter}`;
    return result;
}
console.log(areaAP(1));

// Equality Check
let equality = function(a,b){
    return ( a == b ? (a + " & " + b + " Are Equal.") : (a + " & " + b + " Are Not Equal."));
}
console.log(equality(99,99));

// Arrow Function ================================================= ES6 Version

let multi = function(l,b){  // Function expression
    return (l*b);
}

let helloArrowFunction =  () => console.log("Hello"); // Arrow Function
helloArrowFunction();
let arrowFunction =  (a,b) => a*b;
console.log(arrowFunction(5,6));

// Largest of 3 no.
 let largestNo = (a,b,c) => {
    if (a>b && a>c)
    return (a + " is Largest");
    else if (b>a && b>c)
    return (b + " is Largest");
    else return (c + " is Largest");
 };
 console.log(largestNo(9,5,99));

 // Range
 let rangeChecker1 = (num) => {
    if (num > 100 && num < 200)
    return (num + " Falls in 100 - 200 Range");
    else if (num > 200 && num < 300)
    return (num + " Falls in 200 - 300 Range");
    else if (num > 300 && num < 400)
    return (num + " Falls in 300 - 400 Range");
    else if (num > 400 && num < 500)
    return (num + " Falls in 400 - 500 Range");
    else if (num < 100 && num > 0)
    return (num + " Falls in 0 - 100 Range");
    else return (num + " is a 500 + Number");
 }
 console.log(rangeChecker1(999));

 //Even or Odd

 let number1 = (num) => {
    return (num % 2 == 0 ? "Even Number" : "Odd Number");
 }
 console.log(number1(54));

 // Square no.

 let squareNo = (num) => num * num;
 console.log(squareNo(9));

