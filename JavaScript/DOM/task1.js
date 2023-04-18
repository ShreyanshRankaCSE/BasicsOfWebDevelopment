let btn = document.getElementById("change");
console.log(btn);

let para1 = document.getElementById("para")
console.log(para1);

let initial = para1.textContent;
// let changeBtn = document.querySelector(".change");
// console.log(changeBtn);

btn.addEventListener("click", () => {
    console.log("Button is clicked");
    para1.innerHTML = `${initial} Ranka !!`;
});

let btn1 = document.getElementById("change1");
console.log(btn);

let task = document.getElementsByClassName("part");
console.log(task);

let baseValue = task.textContent;

btn1.addEventListener("click", () => {
    task[2].innerHTML = `I love playing Cricket and Badminton`;
});