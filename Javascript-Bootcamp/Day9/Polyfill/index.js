//  A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

// const radius = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const areas = radius.map((radi) => Math.PI*radi*radi);

// console.log(areas);

// const area = r => Math.PI*r*r;
// const diameter = r => 2*r;

// Array.prototype.mapArr = function (logic)
// {
//     const output = [];
//     for(let r in this)
//     {
//         output.push(logic(r));
//     }
//     return output;
// }

// console.log(radius.mapArr(area));

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isEven = num => {
//     if(num%2 === 0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// Array.prototype.filterArray = function (logic){
//     const output = [];
//     for(let num of this)
//     {
//         if(logic(num))
//         {
//             output.push(num);

//         }
//     }
//     return output;
// }

// console.log(nums.filterArray(isEven));

// const fruits = ["Mango", "Orange", "Guava", "Litchi", "Apple", "Banana","Pine Apple"];


// const fruit = f => f.length >= 6;

// Array.prototype.filterArray = function (logic){
//     const output = [];
//     for(let f of this)
//     {
//         if(logic(f))
//         {
//             output.push(f);

//         }
//     }
//     return output;
// }

// console.log(fruits.filterArray(fruit));

// Polyfill to write find 

// const arr = [1, 2, 3, 4, , 5, 6, 7, 8];


// function isPresent(num)
// {
//     if(num === 4)
//     {
//         return true;
//     }
//     else{
//         return false;
//     } 
// }

// function myFind(arr,logic)
// {
//     let res;
//     for(let num of arr)
//     {
//         if(logic(num))
//         {
//             res = num;
//             return res;
//         }
//     }
// }

// console.log(myFind(arr,isPresent));
