let array = [1,-1,2,-2,3,-3];

function sum(accumulator, currentValue){return (accumulator + currentValue);};
let filteredArr = array.filter(num => num > 0);
let sumArr = filteredArr.reduce(sum);
console.log(sumArr);

let result = array.filter(function(x){return x > 0;}).reduce(function(acc, cv){ return (acc + cv);});
console.log(result);

let res = array.filter((x) => x>0).reduce((acc, cv) => acc+cv);
console.log(res);

