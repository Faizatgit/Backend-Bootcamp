// Area of triangle

// const radii = 5;

// const area = Math.PI * radii * radii;
// console.log(area);

// // Array of areas

// const radi = [ 4, 8 , 9 , 3 , 7 , 5];
// const areas = [];

// for(let radius of radi)
// {
//     let area1 = Math.PI * radius * radius;
//     areas.push(area1);
// }


// console.log(areas);

// Reverse Word

// const sentence = "The blue fox jumps over a white lazy dog";
// let Reverseword = [];
// let Words = sentence.split(" ");

// for(let Word of Words)
// {
//     Reverseword.unshift(Word);
// }

// console.log(Reverseword);

// Count digit

// const num = 34125;

// const text = num.toString();

// const Ndigit = text.length;
// console.log(Ndigit);

// count vowels

// const text = 'Hello World';
// let count = 0;

// function countVowel(text)
// {
//     for(let char of text)
//     {
//         if( char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U')
//         {
//             count++;
//         }
//     }
//     console.log(`$Number of vowels = ${count}`);
// }

// countVowel("Hello World");

// Calculate square root

// const num = [4 , 9 , 16 , 25 , 36 , 49 , 64];

// let res = [];

// function squareRoot(num)
// {
//     for(let n of num)
//     {
//         let sroot = Math.sqrt(n);
//         res.push(sroot);
//     }
//     console.log(`Array of square root ${res}` );
// }

// squareRoot(num);

// Frequency of each letter

// const text = "Hello World";

// for(let char of text)
// {
//     if()
// }


// Find sum of numbers

// const list = [1, 2, 3, "3476", 6, "43874", "2178832"];
// let sum = 0;

// function countNumber(list)
// {
//     for(let num of list)
//     {
//         if(typeof num === "number")
//         {
//             sum = sum + num;
//         }
//     }
//     console.log(sum);
// }

// countNumber(list);

// Find sum of even digits

// const number = 376347;
// let count = 0;

// function countEvenDigit(number)
// {
//     let str = number.toString();
//     for(let s of str)
//     {
//         n = parseInt(s);
//         if(n%2 === 0)
//         {
//             count += n;
//         }
//     }
//     console.log(count);
// }

// countEvenDigit(number);

//Capitalize first letter

// const str = "The blue fox jumps over a white lazy dog";
// let res = [];

// function CapitalizeFirstLetter(str)
// {
//     words = str.split(" ");
//     for(let word of words)
//     {
//         res.push(word.replace(word[0],word[0].toUpperCase()));
//     }
//     console.log(`New String: ${res.join(" ")}`);
// }

// CapitalizeFirstLetter(str);

// const myArr = [[1, 2], [3, 4, 5], ["Hello", true], [5, [true, false]], 99, 100];

// const merge = myArr.flat(1);
// console.log(merge);

// Do it without using flat function
