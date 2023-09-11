// A function that returns a function or takes other functions as arguments is called a higher-order function.

function fun(f)
{
     f();
     console.log("Inside Fun");
}

function innerFun()
{
    console.log("Inside inner fun");
}

fun(innerFun);