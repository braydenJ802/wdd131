// variables (let) vs constants (const)

const PI = 3.14159;
let radius = 3;

let area = (radius * radius) * PI;

console.log(area);



// scope
let global = "I'm global"; // This is a global scope

function exampleFunction() {
    // This is a local scope
    let block = "I am block level or local";
    console.log(block);
    console.log(global);
};

exampleFunction();
