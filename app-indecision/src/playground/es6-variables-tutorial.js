var nameVar = "Andrew";
var nameVar = "Mike";   // this will re-assign the variable
console.log("nameVar:", nameVar);

let nameLet = "Jen";    // let variables cannot be re-defined but can be re-assigned.
nameLet = "Julie";
console.log("nameLet:", nameLet);

const nameConst = "Frank";  // const variables can neither be re-defined nor be re-assigned.
console.log("nameConst:", nameConst);

// Block scoping Start
const fullName = "Jen Mead";    // global const
let firstName;  // declared in global scope with undefined assignment.
if (fullName) {
    firstName = fullName.split(" ")[0];    // global scope let variabale re-assigned in if block
    let lastName = fullName.split(" ")[1];    // block scope let variabale cannot be accessed in global scope.
    console.log("---------- If Block Scope Start ----------");
    console.log("Block Scope firstName:", firstName);
    console.log("Block Scope lastName:", lastName);
    console.log("---------- If Block Scope End ------------");
}
// Block Scoping End

console.log("Block Scope firstName in Global Scope", firstName);

// Error: lastName cannot be accessed here as it was a block scoped variable.
console.log("Block Scope lastName in Global Scope:", lastName);
