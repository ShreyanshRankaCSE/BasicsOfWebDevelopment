// Array is an object in JS which stores values continously

// Array of Strings
const words = ["Hey", "My", "Name", "is", "Shreyansh"];
console.log(words);

// Empty array
const emptyArray = [];
console.log(emptyArray);

// Array of Numbers
const noArray = [1,2,31,4,5];
console.log(noArray);

// Mixed Datatypes in Array
const mixedArray = ["Name", "is", 3 ,31,45];
console.log(mixedArray);

const array = [
    1,2,3,'Hey ' + 'Everyone', function array (){
        console.log("dsfs");
    }
];
console.log(array);

// Call via indexing in Array

const myArray = [1,2,5,"Hi",3,(8+9)];
console.log(myArray[1]);
console.log(myArray[3]);
console.log(myArray[5]);
console.log(myArray[9]);  // Undefined
console.log(array[4]());

let myArrays = ["Hey ", "I ", "am "];
myArrays.push("Shreyansh");  // Pushes Data at the end of the array
console.log(myArrays);

myArrays.unshift("Good Morning, ");  // Adds the data at the starting of the array
console.log(myArrays);

myArrays[0]="Bye - Bye"; // Updates the existing data in the Array
console.log(myArrays);

let arrayLength = myArrays.length;  // Gets the total elements present in the Array i.e. Length of Array
console.log(arrayLength);

let removedLastElement = myArrays.pop();     // Removes the last element from the array
let removedFirstElement = myArrays.shift();  // Removes the first element from the array
console.log(myArrays);
console.log(removedLastElement);
console.log(removedFirstElement);

let array1 = [1,2,3];
let array2 = [4,5,6];

let array3 = array1.concat(array2);  // Combines 2 or more Arrays and returns it.
console.log(array3);