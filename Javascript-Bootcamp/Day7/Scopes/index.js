// WArm up question

// function movecapitalLetters(str)
// {
//     const char = str.split("");

//     const capitalLetter = char.filter((c) => c.toUpperCase() === c);
//     const smallLetter = char.filter((c)=> c.toLowerCase() === c);

// return capitalLetter.concat(smallLetter).join("");
// }

// console.log(movecapitalLetters('haPPy'));

// Global Scope


// function getName()
// {
//     let lastName = 'ABC';

//     function fun()
//     {
//         console.log("Inside Fun");
//         console.log(lastName);

//         function f()
//         {
//             const firstName = 'XYZ';
//             console.log(lastName);
//             console.log(firstName);
//         }

//         f();

//         console.log(lastName);
//     }

//     fun();
// }

// getName();

// var a = 100;   // It has either Global scope or functional scope


// function fun()
// {
//     var a = 200;
//     console.log(a);
// }

// console.log(a);
// fun();

// var c = 200;

// if(true)
// {
    // var c = 500; // New variable won't be created here
//     console.log(c);
// }

// console.log(c);

//    Scope for let and const

{
    // This is block in js
}

// let a = 200;

{
    // let a = 300;
    // console.log(a);  // This will print 300
}

// console.log(a);    // This will print 200

//   Scope

// let name = "Sarah";

// function getName()
// {
//     let name = 'Another Name';
//     console.log(name);
//     f();
// }

// function f()
// {
//     console.log(name);
// }


// getName();

// var a = 100;

// function fun()
// {
//     var b = 200;
//     console.log('Inside Fun!');

//     function innerFun()
//     {
//         var c =300;
//         console.log(c);
//         console.log(b);
//     }

//     innerFun();
// }

// fun();

// console.log(a);

