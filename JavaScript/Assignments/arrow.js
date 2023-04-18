// 1st 

let calcAverage = (a,b,c) => (a+b+c)/3 ;

let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);

let checkWinner = (avgDolphins,avgKoalas) => {
    //return (a >= 2*b ? "Dolphins Team Wins" : "Koalas Team Win");
    if (avgDolphins >= 2*avgKoalas) return (`Dolphin Wins ${avgDolphins} vs ${avgKoalas} `);
    else if (avgKoalas >= 2*avgDolphins) return (`Koalas Wins ${avgKoalas} vs ${avgDolphins }`);
    else return ("It's a Draw")
}

console.log("1 Average for Dolphins Team : " + avgDolphins);
console.log("1 Average for Koalas Team : " + avgKoalas);
console.log(checkWinner(avgDolphins,avgKoalas));

avgDolphins =  calcAverage(85,54,51)
avgKoalas = calcAverage(23,34,27);

console.log("2 Average for Dolphins Team : " + avgDolphins);
console.log("2 Average for Koalas Team : " + avgKoalas);
console.log(checkWinner(avgDolphins,avgKoalas));

// 2nd

let greet = function(pName){
    //return (`Hello my name is ${pName}.`)
    console.log(`Hello my Name is ${pName}`);
}
greet("Shreyansh");
//console.log(greet(Shreyansh));

let greetAgain = (name) => console.log(`Hello Again my Name is ${name}.`);

greetAgain("Shreyansh");

//3rd Convert to Arrow Function

let counterFunc = function(counter) {
    if (counter > 100) counter = 0;
    else counter++;
    return counter;
}
let counterFuncArrow = (counter) => {
    if (counter > 100) counter = 0;
    else counter++;
    return counter;
}

// 4th

let greetByFullName = (fName,lName) => (`Hey Buddy, My Name is ${fName} ${lName}.`);
console.log(greetByFullName("Shreyansh","Ranka")); 

//5th

//let isEven = (num) => (return num % 2 == 0 ? "Yes it's a Even Number" : "Not Even Number")
let isEven = (num) => (num % 2 === 0);
console.log(isEven(56));
console.log(isEven(55));

//6th

let LbstoKg = (weightKg) => {
    weightLbs =  weightKg * 2.2;
    if(weightLbs > 150) 
    console.log ("Obese");
else if(weightLbs < 150 && weightLbs > 100)
    console.log("Ok");
else 
    console.log("Underweight");
};
LbstoKg(50);

