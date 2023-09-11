// class Person{
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     get getName()
//     {
//         return this.name;
//     }

//     get getAge()
//     {
//         return this.age;
//     }

//     display()
//     {
//         console.log(`Person: ${this.name}`);
//     }
// }

// const P1 = new Person("Ram" , 20);

// console.log(P1.display());

class car{
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }

    get getName()
    {
        return this.name;
    }

    get getPrice()
    {
        return this.price;
    }

    set setPrice(price)
    {
        if(price < 0)
        {
            this.price = 0;
        }
        else{
            this.price = price;
        }
    }

    display()
    {
        console.log(`Name:${this.name},Price:${this.price}`);
    }

    startCar()
    {
        console.log("Starting the car ............");
    }
}

const C1 = new car("Audi", 10000000);

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class RacingCar extends car{
    constructor(name,price,topSpeed,color)
    {
        super(name,price);
        this.topSpeed = topSpeed;
        this.color = color;
    }

    get getColor()
    {
        return this.color;
    }

    get getName()
    {
        return "Racing Car: " + super.getName;
    }
}

const C2 = new RacingCar("BMW",15000000 , 300 , "Black");


//    Static Methods - They belong to class

class Point{
    static name = "Faizan";

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    static getdistance(P1,P2)
    {
        console.log(`${this.name}`);
        return Math.hypot((P1.y-P2.y),(P1.x-P2.x));
    }
}

const P1 = new Point(3,4);
const P2 = new Point(6,7);




