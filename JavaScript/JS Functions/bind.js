// Bind() -> It returns a new function when invoked, has its 'this' set to a specific value.

let human1 = {
    name : "Shreyansh",
    age : 21,
    greet : function(){
        console.log(this.name + " is actually " + this.age+" Years Old.");
    },
};

let human2 = {
    name : "Sachin",
    age : 37,
};

let newFunction = human1.greet.bind(human2);

newFunction();