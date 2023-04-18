let text = document.getElementById("input-text");
console.log(text.value);

let addBtn = document.getElementById("add");
console.log(addBtn);

let itemsList = document.getElementById("itemsList");
console.log(itemsList);

addBtn.addEventListener("click" , () =>{
    
    if(text.value === '') {
        alert("Empty Task can not be added !!");
        return;
    }
    
    let todoDiv = document.createElement("div");
    todoDiv.textContent = text.value;
    itemsList.appendChild(todoDiv);
    console.log(todoDiv);




    text.value = "";

})