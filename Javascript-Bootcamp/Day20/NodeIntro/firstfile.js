console.log('Hello World');

const a = 100;
const b = 200;
console.log(a+b);

const colors = ["yellow","oraange","green","blue"];
console.log(colors);
colors.push("violet");
console.log(colors);

const capitalizeColour = colors.map((color) => color.toUpperCase());
console.log(capitalizeColour);

const person = {
    name: "Rohan",
    isAdult: true,
    age: 25
}

console.log(person);

class car{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }
}

const BMW = new car("BMW",10000000);
console.log(BMW);