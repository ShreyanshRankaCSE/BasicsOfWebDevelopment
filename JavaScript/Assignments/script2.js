let Marks = {
    P:85,
    C:95,
    M:98,
    B:91,
    E:89,
}
let totalMarks = 500;
let percentMarks = ((Marks.M +Marks.P+Marks.C+Marks.B+Marks.E)*100/totalMarks);
console.log(percentMarks);

if (percentMarks>=90)
console.log("Grade A");
else if (percentMarks>=80)
console.log("Grade B");
else if(percentMarks>=70)
console.log("Grade C");
else if(percentMarks>=60)
console.log("Grade D");
else if (percentMarks>=40)
console.log("Grade E");
else console.log("Bhai Tujse na ho payega, Fail ho gya Tu");