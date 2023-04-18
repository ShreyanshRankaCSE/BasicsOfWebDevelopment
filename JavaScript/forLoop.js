for(let i = 0; i <10 ; i++){
    console.log(i);
    console.log("Hello");
};

// Name 5 times

for (let i = 0; i<5; i++){
    console.log( + "Shreyansh Ranka");
}

// Display no from 11 - 20

for (let i = 11; i <= 20; i++){
    console.log(i);
}

// Table for 5 and 7

for (let i = 1; i <= 10 ; i++){
    console.log(5 + " * " +i + " = " + 5*i);
}

for (let i = 1; i <= 10 ; i++){
    console.log(7 + " * " +i + " = " + 7*i);
}

// Sum of first 50 Natural Numbers

let sum = 0;
for (let i = 1 ; i<=50 ; i++){
    sum = sum + i;
}
console.log(sum);


// Taking Input Value======================================

// let inputValue = prompt("Hey Please Enter Any Value");
// console.log(inputValue);

// Factorial of a number

let n = prompt("Hey Please Enter Any No. for Factorial");
console.log("Factorial of " + n);
let final = 1;
for (n; n>0; n--){
    let a = n;
    final = final * a;
}

console.log(final);