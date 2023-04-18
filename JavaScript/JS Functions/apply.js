// Similar as Call but uses Array as an argument

let human1 = {
    name : "Shreyansh",
    age : 21,
};

let human2 = {
    name : "Sachin",
    age : 37,
};

let display = function(city,car){
    //city = " In Rajasthan";
    console.log(this.name + " is " + this.age +" Years Old " + "& lives " + city + car);
};

display.apply(human1, ['In Rajasthan', ' & has BMW']);