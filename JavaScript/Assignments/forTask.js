// 4th

let bills = [22,295,176,440,37,105,10,1100,86,52];
let tips = [];
let totals = [];
// let calcTip1 = [];

for(i=0; i<10; i++){
    (bills[i] <= 300 && bills[i] >= 50) ?  (tips[i] = bills[i] * 0.15) : (tips[i] = bills[i] * 0.2);
    
    //calcTip1 = tips.push(tips[i]);
    // totals[i] = bills[i] + tips[i];
};
for(i=0; i<10; i++){
    totals[i] = bills[i] + tips[i];
};

console.log("Total Bills are : " + bills);
console.log("Total Tips are : "+ tips);
console.log("Total Amount is : "+ totals);

//3th BMI

let objM = {
    Name : "Mark Miller",
    Mass : 78,
    Height : 1.69,
};
let objJ = {
    Name : "John Smith",
    Mass : 92,
    Height : 1.95,
};

let calcBMI = (m,h) => (m/(h*h));

let markBMI = calcBMI(objM.Mass,objM.Height);
let johnBMI = calcBMI(objJ.Mass,objJ.Height);

console.log("Mark Miller's BMI is: " + markBMI);
console.log("John Smith's BMI is: " + johnBMI);

markBMI > johnBMI ? console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`) : console.log(`John's BMI (${johnBMI}) is higher than  Mark's BMI (${markBMI})`);