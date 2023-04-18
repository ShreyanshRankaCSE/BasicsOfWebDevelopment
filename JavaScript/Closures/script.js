// Closures in JS: Function is using a Variable (which is Globally Defined / in Lexical Scope)
// Lexical Scope: Accessing a variable (which is present in Outer Scope) from a Inner Scope.

function add(){
    let count = 0;
    function addNew(){
    count++;
    }
    addNew();
    //console.log(count);
    return count;
}

add();
add();