// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


//-----------------Implicit Binding--------------------------------------

// function fun()
// {
//     console.log(this);
// }

// fun();
// window.fun();

// const Person = {
//     name: "Faizan",
//     age: 22,
//     isAdult: true,
//     sayHello: function (){
//         console.log(this);
//         console.log(`Hello from ${this.name}`);
//     }
// }

// Person.sayHello();

// const greet = Person.sayHello;

// greet();

//--------------------Explicit Binding-------------------

// function Person(name,age)
// {
//     console.log(name);
//     console.log(age);
    // console.log(this); // This points window object
// }

// const obj = {
//     l: 10,
//     m: true
// }
// Person("Faizan",22);

// Using Bind method
// const f = Person.bind(obj)

// f("RAM",23);

//Using Call Method

// Person.call(obj,"Fan",23);


// const Person = {
//     name: "Faizan",
//     age: 22,
//     isAdult: true,
//     sayHello: function (){
//         console.log(this);
//         console.log(`Hello from ${this.name}`);
//     }
// }

// const greet = Person.sayHello.bind(Person);
// greet();

//   With the bind() method, an object can borrow a method from another object.

// function Product(name,price)
// {
//     this.name = name;
//     this.price = price;
// }


// function food(name,price)
// {
//     Product.call(this,name,price);
//     this.category = 'Food';
// }
// const cheese = new food('Pizza',250);

// console.log(cheese);

// function laptop(name,price,memory,processor)
// {
//     Product.call(this,name,price);
//     this.memory = memory;
//     this.processor = processor;
// }

// const hp = new laptop('Pavillion',50000,'1TB','i5');
// console.log(hp);

//------------This keyword with arrow function-------

// const car = {
//     name: 'Audi',
//     price: 100,
//     topSpeed: 250,
//     present: () => {
//         console.log(this);
//         console.log(`Price: ${this.price}`);
//     }
// }

// car.present();

