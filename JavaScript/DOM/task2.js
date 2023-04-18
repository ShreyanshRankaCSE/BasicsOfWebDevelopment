let list = [];

let inputText = document.getElementById("info");
console.log(inputText);

let btn = document.getElementById("add");
console.log(btn);

let taskList = document.getElementsByClassName("task");
console.log(taskList);

btn.addEventListener("click" , () => {
    console.log("Button is Clicked");
    //let textInput = text.textContent;
    list.push({
        text : inputText.value,
    });
    console.log(list);
    for(let i = 0; i< list.length; i++){
        console.log(list[i].text);
        taskList[i].innerhtml = (list[i].text);
    }
});

let div1 = document.querySelector(".div1");
console.log(div1);

// div1.addEventListener("click", () => {
//     div1.style.borderRadius = "50%";
// })

let isSquare = true;
div1.addEventListener("click", () => {
    if(isSquare){
        div1.style.borderRadius = "50%";
        isSquare = false;
    }
    else {
        div1.style.borderRadius = "0%";
        isSquare = true;
    }
})

let fruits = ["apple", "mango", "banana"];
let fruitsList = document.getElementById("fruitsList");

fruits.forEach((fruit) => {
    let itemsEle = document.createElement("li");
    itemsEle.textContent = fruit;
    fruitsList.appendChild(itemsEle);
})

