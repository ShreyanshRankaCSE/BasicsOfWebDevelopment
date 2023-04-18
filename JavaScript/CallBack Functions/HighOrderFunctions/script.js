let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

// Map ->  Executes a function on each element of an array
let newArr = arr.map(num1 => num1*10);
console.log(newArr);

// Filter -> Remove items which don’t satisfy a given condition
let filteredArr = arr.filter(num2 = num2 % 2 === 0);
console.log(filteredArr);