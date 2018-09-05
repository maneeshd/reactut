// normal function can be named and then used later
function square(num) {
    console.log("argumnets object in ES5 function:", arguments);
    return num * num;
}

// arrow functions are anonymous and have to be assigned to a variable or used in-place
const squareArrow = (num) => num * num;

/*
// Also can be written like this
const squareArrow = (num) => {
    // do something here .....
    return num * num;
};
*/

console.log("8 Squared using normal function =", square(8));
console.log("8 Squared using arrow function =", squareArrow(8));

// Simple example
const getFirstName = (fullName) => fullName.split(" ")[0];
console.log("First name of Maneesh Divana is", getFirstName("Maneesh Divana"));

// The 'arguments' object is no longer available with arrow functions
const add = (a, b) => {
    // console.log("argumnets object in ES6 arrow function:", arguments); // this will raise an error
    return a + b; 
};
console.log("55 + 93 =", add(55, 93));


// The 'this' object is no longer bound in ES6 Arrow Functions as in ES5 Functions
const user = {
    name: "Maneesh Divana",
    cities: ["Bengaluru", "Puttur"],
    placesLivedError: function() {
        this.cities.forEach(function(city){
            console.log(this.name, "has lived in", city); // Error: 'this' is not defined here
        });
    },
    placesLived: function() {
        this.cities.forEach((city) => {
            console.log(this.name, "has lived in", city);
        });
    },
    placesLivedMap: function() {
        // Using map
        return this.cities.map((city) => this.name + " has lived in " + city + "!");
    }
};

user.placesLived();
console.log("user.placesLivedMap() =", user.placesLivedMap());


// Example
const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log("\n----------- EXMAPLE -----------");
console.log("Multiplying", multiplier.numbers, "with", multiplier.multiplyBy, "=", multiplier.multiply());