function Person(name,age)
{
    this.name = name;
    this.age = age;

    // this.getNAme = function()
    // {
    //     console.log(`${this.name}`);
    // }
}


// Changing prototype directly is not a good practice

Person.prototype.getNAme = function()
{
    console.log(`${this.name}`);
}

const P1 = new Person("Faizan",22);

//  In a constructor function this does not have a value. It is a substitute for the new object. 
//  The value of this will become the new object when a new object is created.


//  It is considered good practice to name constructor functions with an upper-case first letter.


