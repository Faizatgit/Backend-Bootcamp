//  A callback is a function passed as an argument to another function.

//  Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

function display(some)
{
    document.getElementById("demo").innerHTML = some;
}

function calculate(x , y)
{
    let sum = x+y;
    display(sum);
}

calculate(4,5);