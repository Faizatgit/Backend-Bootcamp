const obj = {
    a: 1,
    b: true,
    c: "Hello",
    d: { m: 100, n: false },
    e:[99,88]
}

let res = [];
for(let prop in obj)
{
    res.push([prop,obj[prop]]);
}

console.log(res);


const sentence = "Hello World";
let ans = "";

for(let char of sentence)
{
    if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <=122)
    {
        ans = ans + char.toUpperCase();
    }
    else{
        ans = ans + char.toUpperCase();
    }
}

console.log(ans);

// Another Solution

// const sentence = "Hello World";
// let ans = "";

// for(let char of sentence)
// {
//     if(char.toUpperCase === char)
//     {
//         ans = ans + char.toLowercase();
//     }
//     else{
//         ans = ans + char.toUpperCase();
//     }
// }

// console.log(ans);



const string = "Hello World";
const words = string.trim().split(" ");
console.log(words);

// Celcius to farhenhite

let degree = prompt(parseInt("Enter the value of degree"));

const f = (degree*(9/5)) + 32;

console.log(f);
