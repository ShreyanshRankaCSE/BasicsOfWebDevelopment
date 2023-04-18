// 4th
let bill = [275,40,430];
let tip = [];

(bill[0] <= 300 && bill[0] >= 50) ?  (tip[0] = bill[0] * 0.15) : (tip[0] = bill[0] * 0.2); 
(bill[1] <= 300 && bill[1] >= 50) ?  (tip[1] = bill[1] * 0.15) : (tip[1] = bill[1] * 0.2); 
(bill[2] <= 300 && bill[2] >= 50) ?  (tip[2] = bill[2] * 0.15) : (tip[2] = bill[2] * 0.2); 

console.log(`The Bill Value is ${bill[0]} and Tip is ${tip[0]} and the Final Total value is ${bill[0] + tip[0]}`);
console.log(`The Bill Value is ${bill[1]} and Tip is ${tip[1]} and the Final Total value is ${bill[1] + tip[1]}`);
console.log(`The Bill Value is ${bill[2]} and Tip is ${tip[2]} and the Final Total value is ${bill[2] + tip[2]}`);


// 2nd

let bills = [125,555,44];
let tips = [];
let calcTip = (billValue) =>{
    let tip = 50 <= billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
    tips.push(tip);
};

console.log(calcTip(bills[0])); 
console.log(calcTip(bills[1])); 
console.log(calcTip(125)); 

//console.log("Enter Bill Value", bill);
(bills[0] <= 300 && bills[0] >= 50) ?  (tips[0] = bills[0] * 0.15) : (tips[0]  = bills[0] * 0.2); 
(bills[1] <= 300 && bills[1] >= 50) ?  (tips[1] = bills[1] * 0.15) : (tips[1]  = bills[1] * 0.2); 
(bills[2] <= 300 && bills[2] >= 50) ?  (tips[2] = bills[2] * 0.15) : (tips[2]  = bills[2] * 0.2); 


console.log(`The Bill Value is ${bills[0]} and Tip is ${tips[0]} and the Final Total value is ${bills[0] + tips[0]}`);
console.log(`The Bill Value is ${bills[1]} and Tip is ${tips[1]} and the Final Total value is ${bills[1] + tips[1]}`);
console.log(`The Bill Value is ${bills[2]} and Tip is ${tips[2]} and the Final Total value is ${bills[2] + tips[2]}`);

