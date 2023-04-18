// IIFE -> Immediately Invoked Function Expression(a function stored in a variable)
// IIFE is a function expression which gets called / invoked immediately as soon as we define it
//  (function(){
//      add code here    
//  })();

(function(){
    // Some code here
    console.log("Hey I'm IIFE !!");
})();

function hello(){
    console.log("Hello");
}
hello();

(function (a,b){
    //console.log(a+b);
    return (a+b);
    // Some code here
    //console.log("Hey I'm IIFE1 !!");
})(4,5);

(function(){
    // Some code here
    console.log("Hey I'm IIFE2 !!");
})();

//Function Expression
let sum = (function sum(a,b){
    return a+b;
})(4,5);
console.log(sum);

// Arrow Function
(()=>{
    console.log("Hiiiiiiiiiiiiii");
})();