// Debouncing is a programming technique used to optimize the performance of functions 
// that are triggered repeatedly in a short period of time, particularly in scenarios 
// involving user interactions such as input fields or scroll events. 
// The goal of debouncing is to ensure that a function is only executed once after a 
// specified delay since the last time it was invoked, even if it's called multiple times within that delay period.


// Throttling is a programming technique used to control the rate at which a function is executed, 
// ensuring that it is called at a maximum frequency, often with a fixed time interval between invocations. 
// Throttling is particularly useful in scenarios where you want to limit the number of function calls within 
// a specific time frame, such as handling scroll events or preventing rapid button clicks.

// The key difference between throttling and debouncing is that throttling guarantees that the function will be 
// executed regularly at a specified interval, while debouncing delays the function's execution until a period of 
// inactivity has passed.

const searchInp = document.getElementById('searchInp');
let count = 0;

function fetchAllMatchProduct()
{
    console.log('API call',count++);
}

//-----------------------------------Debouncing----------------------------------------------------------------------

// function createDebouce(func,delay)
// {
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func();
//         },delay)
//     }
// }

// const debounce = createDebouce(fetchAllMatchProduct,200);
// searchInp.addEventListener('keypress',debounce);


//----------------------------------Throttling----------------------------------------------------------------------------

function createThrottle(func,delay)
{
    let start = 0;
    return function(){
        let current = new Date().getTime();
        if(current - start > delay)
        {
            func();
            start = current;
        }
    }
}

const throttle = createThrottle(fetchAllMatchProduct,500);
searchInp.addEventListener('keydown',throttle);