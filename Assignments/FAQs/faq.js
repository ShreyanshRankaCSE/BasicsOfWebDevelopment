var q1 = document.querySelector(".question1");
var q2 = document.querySelector(".question2");
var q3 = document.querySelector(".question3");
var q4 = document.querySelector(".question4");

var show1 = document.querySelector(".show1");
var show2 = document.querySelector(".show2");
var show3 = document.querySelector(".show3");
var show4 = document.querySelector(".show4");

var ans1 = document.querySelector(".answer1");
var ans2 = document.querySelector(".answer2");
var ans3 = document.querySelector(".answer3");
var ans4 = document.querySelector(".answer4");

ans1.style.display = "none";
ans2.style.display = "none";
ans3.style.display = "none";
ans4.style.display = "none";

show1.addEventListener("click",() =>{
    if(show1.innerHTML == "+"){
        //q1.innerHTML = "What? Do lorem";
        ans1.style.display = "block";
        show1.innerHTML = "X";
    }
    else{
        q1.innerHTML = "What?";
        ans1.style.display = "none";
        show1.innerHTML = "+";
    }
});
show2.addEventListener("click",() =>{
    if(show2.innerHTML == "+"){
        //q1.innerHTML = "What? Do lorem";
        ans2.style.display = "block";
        show2.innerHTML = "X";
    }
    else{
        q2.innerHTML = "What?";
        ans2.style.display = "none";
        show2.innerHTML = "+";
    }
});
show3.addEventListener("click",() =>{
    if(show3.innerHTML == "+"){
        //q1.innerHTML = "What? Do lorem";
        ans3.style.display = "block";
        show3.innerHTML = "X";
    }
    else{
        q3.innerHTML = "What?";
        ans3.style.display = "none";
        show3.innerHTML = "+";
    }
});
show4.addEventListener("click",() =>{
    if(show4.innerHTML == "+"){
        //q1.innerHTML = "What? Do lorem";
        ans4.style.display = "block";
        show4.innerHTML = "X";
    }
    else{
        q4.innerHTML = "What?";
        ans4.style.display = "none";
        show4.innerHTML = "+";
    }
});