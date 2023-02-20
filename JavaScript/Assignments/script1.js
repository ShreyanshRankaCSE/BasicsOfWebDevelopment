
//Team Scores
let D ={
     d1:96,
     d2:108,
     d3:89,
}
let K={
    k1:88,
    k2:91,
    k3:110,
}

//Point 1 Average of Teams
let dAvg = ((D.d1+D.d2+D.d3)/3);
let kAvg = ((K.k1+K.k2+K.k3)/3)
console.log("D's Average Score is  "+ dAvg);
console.log("K's Average Score is  "+ kAvg);

//Point 2 Winner
if(dAvg>kAvg)
console.log('Dolphins Team Win');
else if (dAvg<kAvg)
console.log('Koalas Team Win');
else 
console.log('The Match is Draw');

//Point3 Min Avg. score 100+
let A ={
    d1:97,
    d2:112,
    d3:101,
}
let B={
   k1:109,
   k2:95,
   k3:123,
}
let aAvg = ((A.d1+A.d2+A.d3)/3);
let bAvg = ((B.k1+B.k2+B.k3)/3);
// console.log(aAvg + " " + bAvg);
if(aAvg>bAvg && aAvg>100)
console.log('Dolphins Team Win');
else if (aAvg<bAvg && bAvg>100)
console.log('Koalas Team Win');
else if (aAvg === bAvg && aAvg>100 && bAvg>100)
console.log('The Match is Draw');
else console.log("No one Wins");



// //console.log(Dolphin.d1);
// let avgScoreD = ((Dolphin.d1 + Dolphin.d2 +Dolphin.d3)/3);
// console.log("Average for the Dolphins Team : " + avgScoreD);

// let avgScoreK = (88+91+110)/3;
// console.log("Average for the Koalas Team : " + avgScoreK);



// //Data Bonus 1
// console.log('Data Bonus 1');

// function Dolphin(){
//     d1=97,d2=112,d3=101 
// }
// console.log('Dolphins Teams Score are: ' +Dolphin.d1 +' '+d2+ ' '+d3);
// // let avgScoreD1 = (97+112+101)/3;
// // console.log("Average for the Dolphins Team : " + avgScoreD1);

// function Koalas(){
//     k1=109,k2=95,k3=123
// }
// console.log('Koalas Teams Score are: ' +k1 +' '+k2+ ' '+k3);
// // let avgScoreK1 = (109+95+123)/3;
// // console.log("Average for the Koalas Team : " + avgScoreK1);

// console.log('We need a Minimum Score of 100. So eliminating Scores below 100....');
// // if(d1<100 || d2<100 || d3<100)
// // console.log(object);

