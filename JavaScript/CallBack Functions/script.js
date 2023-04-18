// Callback Function is a function that you pass into another function as a argument for the execution by 2 ways: Sync & Async
// Higher Order Functions are  the functions which take functions as a parameter & return function as result.
// Synchronous Callback  : Code executes sequentially
// Asynchronous Callback : 1. When whole Higher Order Function will run then Async will run 
//                2. 

// setTimeout() function is a Asynchronous Callback

console.log("Start");

setTimeout(() => {
    console.log("TimeOut");
}, 4000);

console.log("End");

// Function : First Class Citizens
// 1. Function can be stored in a Variable
// 2. Pass function into other function
// 3. Can be returned as well (just like variable)

//1
let add = function(a,b){
    return (a+b);
};

//2
let sumSquare = function(a,b){
    let doc = add(a,b);
    return (doc*doc);
};

//3
let convert = function(fn, parameter1,parameter2){
    return fn(parameter1, parameter2);
};

let addMax = convert(sumSquare, 2, 3);
let addMax1 = convert(add, 2, 3);

console.log(addMax);
console.log(addMax1);


// anonymous functions

function filter(arr, callback){
    let ans = [];
    for(let i = 0; i<=arr.length; i++){
        if(callback(arr[i])){
            ans.push(arr[i]);
        }
    }
    return ans;
}

let arr = [1,2,3,4,5,6,7,8,9,10];

let oddNums = filter(arr, function(number){
    return (number % 2 == 0);
});

console.log(oddNums);
 

// setTimeout()
// console.log("Start");

// setTimeout(() => {
//     console.log("This is set timeout function 1");
// }, 4000);

// setTimeout(() => {
//     console.log("This is set timeout function 2");
// }, 4000);

// setTimeout(() => {
//     console.log("This is set timeout function 3");
// }, 4000);

// console.log("End");


// infinite loop ==========================================================
// let a = true;

// setTimeout(function(){
//     a = false;
// }, 10000);

// while(a){
//     console.log("hello");
// }


// setInterval() =============================================

// console.log("start");
// setInterval(() => {
//     console.log("Heelo, I am a set Interval function");
// }, 1000);

// console.log("end");

//task - 1
console.log("Start");
let a = "true";
setInterval(function(){
    if(a) console.log("Hello");
}, 1000);

setTimeout(function(){
    a = false;
}, 10500);
console.log("end");