// Types of console
console.log("This is a simple log");
console.warn("This is Last Warning !");
console.error("This is an error");

const colors = ["violet" , "indigo" , "red" , "blue" , "green"]

// removes last elements from the array
colors.pop();
console.log(colors);

// Adds element at the end of the array
colors.push("yellow");
console.log(colors);

// removes elements from the start of the array
colors.shift();
console.log(colors);

// Adds elements at the start of the array
colors.unshift("orange");
console.log(colors);


// JS Objects
const student = {
    name: "Ram",
    Class: "10",
    IsStudent: true,
    favColor: "{yellow , red}"
}

console.log(student);

console.log(student.name);
console.log(student.Class);
console.log(student.IsStudent);
console.log(student.favColor);

