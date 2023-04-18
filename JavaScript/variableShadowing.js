// Variable Shadowing 

// A variable, when declared in Outer Scope, 's value has been called in Inner Scope

//A variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Variable Shadowing.

let doc = "Hey !!";

function fav(){
    let doc = "Nooo";
    console.log(doc);
}

fav();
console.log(doc);
