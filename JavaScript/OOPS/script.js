// JS is Prototype based Language
// class -> Syntatic Sugar
// Prototype: It is basically an object (a.k.a Object Prototype) where we can attach methods and properties, which enables all other objects to inherit those methods and properties

// 3 types of Modifiers : public(by-default), private, protective

class Student{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let student1 = new Student("Shreyansh", 24);
let student2 = new Student("Sachin", 45);


// Inheritance : Parent - Child Relationship, Inheriting properties of Parent Class into the Child Class is k.a. Inheritance.

class Parent{
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

class Child extends Parent{
    constructor(fname, lname) {
        super(lname);
        this.fname = fname;
    }
}

let parent = new Parent("R.", "Ranka");
let child = new Child("Shreyansh");

console.log(parent);
console.log(child);

// Encapsulation : Just like a Capsule, Wrapping up all the data and functions into a single component (Eg. Class)
// Abstraction : Showing essential info. to the User and hiding the internal info. from the User (Eg ATM)
// Polymorphism : 