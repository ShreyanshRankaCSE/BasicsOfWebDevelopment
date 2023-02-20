// Find the largest of three numbers
let set = {
    no1:15,
    no2:20,
    no3:5,
}
if ((set.no1> set.no2) && (set.no1> set.no3))
console.log(set.no1 + " is the largest");
else if ((set.no2> set.no3) && (set.no2> set.no1))
console.log(set.no2 + " is the largest");
else if ((set.no3> set.no2) && (set.no1< set.no3))
console.log(set.no3 + " is the largest");

//find a number
let range = {
    no1:15,
    no2:20,
    no3:5,
}
if (range.no1 == 5)
console.log("We have found the no. at " + range.no1);
else if (range.no2 == 5)
console.log("We have found the no. at " + range.no2);
else if (range.no3 == 5)
console.log("We have found the no. at " + range.no3);

//Even or Odd
let numbers = {
    no1:15,
    no2:20,
    no3:5,
};

(numbers.no1 % 2 == 0 ? console.log(numbers.no1 + " is Even") : console.log(numbers.no1 + " is Odd"));
(numbers.no2 % 2 == 0 ? console.log(numbers.no2 + " is Even") : console.log(numbers.no2 + " is Odd"));
(numbers.no3 % 2 == 0 ? console.log(numbers.no3 + " is Even") : console.log(numbers.no3 + " is Odd"));


// if(numbers.no1%2 == 0)
// console.log(numbers.no1 + " is Even");
// else console.log(numbers.no1 + " is Odd");

// if(numbers.no2%2 == 0)
// console.log(numbers.no2 + " is Even");
// else console.log(numbers.no2 + " is Odd");

// if(numbers.no3%2 == 0)
// console.log(numbers.no3 + " is Even");
// else console.log(numbers.no3 + " is Odd");
