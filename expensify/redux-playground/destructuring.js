// OBJECT DESTRUCTURING
const person = {
    name: "Maneesh",
    age: 25,
    location: {
        city: "Bengaluru",
        state: "Karnataka",
        country: "India"
    }
}

//Default value and aliasing obkect keys
const { name: full_name = "Anonymous", age, location: location_data } = person
const { city, state, country } = location_data

console.log(`${full_name} is ${age} years old.`)
console.log(`He lives in ${city} in the state of ${state} in ${country}.`)


// ARRAY DESTRUCTURING
const coffee_list = ["Cappuccino", "Americano", "Espresso", "Latte", "Macchiato", "Mochaccino", "Flat White", "Inverted Cappuccino"]

// deconstructing array
const [cappuccino, , , latte, macchiato = "Long Macchiato", mocha_latte, flat_white] = coffee_list

console.log(`Maneesh likes these coffees: ${cappuccino}, ${latte}, ${macchiato}, ${mocha_latte}, ${flat_white}`)