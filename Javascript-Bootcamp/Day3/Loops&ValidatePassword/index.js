// Print numbers from 1 to 10

let num = 1;

for(num=1;num<=10;num++)
{
    console.log(num);
}

// While loop
let i =200;

while(i>0)
{
    console.log(i);
    i = i-20;
}

const movies = [
    { name: 'Sholay', director: 'Ramesh Sippy' },
    { name: 'PK', director: 'Raj Kumar Hirani' },
    { name:'Bahubali',director:'SS Rajamouli'}
];

for(i=0;i<movies.length;i++)
{
    console.log(`Movie: ${movies[i].name} , Director: ${movies[i].director}`);
}

const fruits = ['Apple', 'Orange', 'Grapes'];

for(let fruit of fruits)
{
    console.log(`Fruit: ${fruit}`);
}

const car = {
    name: "Audio",
    price: 10000000,
    IsSuperCar: true,
    country: "Germany"
}

for(let prop in car)
{
    console.log(prop , car[prop]);
}

const sentance = "This fox jumps over a white lazy dog";

let words = sentance.split(" ");
let res = [];

for(let word of words)
{
    let reversedword = word.split("").reverse().join();
    res.unshift(reversedword);
}

const reversedsentence = res.join(" ");
console.log(reversedsentence);

// Password Validation
const Password = prompt("Enter the password");

if(Password.length>6 && !Password.includes(" "))
{
    console.log("Correct password!");
}
else{
    console.log("Incorrect Password!")
}

