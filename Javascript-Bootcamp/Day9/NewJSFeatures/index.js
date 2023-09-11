// Spread Operator

// const arr1 = [3,5,2,6];
// const arr2 = [4,8,5,9];

// const arr3 = [...arr1 , 78 , 45, 67, 23 , ...arr2];
// console.log(arr3);


// const car = {
//     name: 'BMW',
//     price: '1cr'
// }

// const racingCar = {
//     ...car,
//     topSPeed: 250,
//     color: 'Black'
// }

// console.log(racingCar);


// const nums = [9, 8, 1, 2, 3, 4, 100];

// console.log(Math.min(...nums));
// console.log(Math.max(...nums));


//----------------------------Rest Parameters---------------------------------------

// function add(a,b,...nums)
// {
//     return a + b + nums.reduce((sum,num) => sum+num , 0);
// }

// console.log(add(1,2,3,4,5,6,7,8,9));

//--------------------------Destructing----------------------------------------------

// const colors = ['blue', 'orange', 'purple', 'lightgreen', 'brown'];

// const [firstColor,secondColor] = colors;
// console.log(firstColor);
// console.log(secondColor);

// const firstColor = colors[0];
// const secondColor = colors[1];
// console.log(secondColor);
// console.log(firstColor);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 23
// };

// const {firstName:myFirstName = 'Anonymous' , lastName} = person;
// console.log(myFirstName);

// const firstName = person.firstName;
// console.log(firstName);


