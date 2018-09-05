/*
* Author: Maneesh Divana <maneeshd77@gmail.com>
*/

"use strict";

class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hey ${this.name}. How ya doin?`;
    }

    getDescription() {
        if(this.age) {
            return `${this.name} is ${this.age} year(s) old`;
        }
        else {
            return `${this.name} has not provided age`;
        }
    }
}

const me = new Person("Maneesh Divana", 25);
console.log(me.getDescription());

const you = new Person("You");
console.log(you.getDescription());
console.log(you.getGreeting());

const someone = new Person();
console.log(someone.getDescription());


// Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    // Overriding getDescription from parent
    getDescription() {
        let parDesc = super.getDescription();
        if(this.hasMajor()) {
            return `Student ${parDesc} and is majoring in ${this.major}.`;
        }
        else {
            return `Student ${parDesc} and has not decided on a major.`; 
        }
    }
}

const stud = new Student("Maneesh", 26, "Computer Science");
console.log(stud.getDescription());

const stud2 = new Student();
console.log(stud2.getDescription());


// Example
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    // Overriding getGreeting from Parent
    getGreeting() {
        if(this.homeLocation) {
            return `Hi ${this.name} from ${this.homeLocation}.`;
        }
        else {
            return `Hi ${this.name} from Nowhere.`;
        }
    }
}

const trav1 = new Traveler("Jesus", 999, "New York");
const trav2 = new Traveler("Christ", 99);
console.log(trav1.getGreeting());
console.log(trav2.getGreeting());
