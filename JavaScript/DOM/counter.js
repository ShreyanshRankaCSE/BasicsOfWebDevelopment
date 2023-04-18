let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let counterValue = document.getElementById("counter");
let reset = document.getElementById("reset");

let counter = 0;

inc.addEventListener("click" , () =>{
    counter++;
    counterValue.innerHTML = counter;
});

dec.addEventListener("click" , () =>{
    if (counter == 0) return; // No Negative Numbers
    counter--;
    counterValue.innerHTML = counter;
});

reset.addEventListener("click", () =>{
    counterValue.innerHTML = 0;
});