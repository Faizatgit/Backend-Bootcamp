const obj = {
    name: "BMW",
    price: 100,
    getPrice: function () {
        console.log(this.price);
    }

}

const Person = {
    name: "Faizan",
    age: 22,
    isAdult: true
}

const P1 = Object.create(Person);
const P2 = Object.create(P1);

//All JavaScript objects inherit properties and methods from a prototype.

//We also learned that you can not add a new property to an existing object constructor:

//To add a new property to a constructor, you must add it to the constructor function:

