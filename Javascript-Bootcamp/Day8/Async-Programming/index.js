//    The setTimeout() method calls a function after a number of milliseconds.

//    1 second = 1000 milliseconds.




// function sayHello()
// {
//     console.log("Hello World");
// }

// function delay(n)
// {
//     for(i=0;i<n;i++)
//     {
//         const time = new Date().getTime();
//         while(new Date().getTime() < time+1000){}
//     }
//     sayHello();
    
// }

// console.time('My Timer');
// console.log('start');
// delay(10);

// console.log('END');  // The console.time() method starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

// console.timeEnd('My Timer');  // The console.timeEnd() stops a timer that was previously started by calling console.time().

//The setInterval() method calls a function at specified intervals (in milliseconds).
//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
//1 second = 1000 milliseconds.

//---------------------------------------------------------------------------

// console.log('Start');

// setTimeout(function callback(){
//     console.log('Inside Callback');
// }, 0);

// console.log('END');

//-----------------------------------------------------------------------------

// console.log('Start');

// const id = setTimeout(function callback(){
//     console.log("Inside CallBack");
// },10000);

// setTimeout(function (){
//     clearTimeout(id);
//     console.log('Clearing the prev timer')
// },2000);

// console.log('END');

console.log("Start");

const id = setInterval(() => {
    console.log('Inside set Interval');
},1000);

console.log('END');

setTimeout(() => {
    console.log('Clearing the interval');
    clearInterval(id);
},5000);