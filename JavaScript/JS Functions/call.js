// Call() -> A JS Function (Helps to use the value of this)

let human1 = {
    name : "Shreyansh",
    age : 21,
};

let human2 = {
    name : "Sachin",
    age : 37,
};

let display = function(city){
    //city = " In Rajasthan";
    console.log(this.name + " is " + this.age +" Years Old." + "& lives " + city);
};

display.call(human1, " In Rajasthan");