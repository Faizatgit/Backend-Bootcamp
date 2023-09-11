// Global variables can be made local (private) with closures.

var a = 200;

function fun(){
    var a = 100;

    function innerfum()
    {
        a++;
        console.log(a);
    }
    return innerfum;
}

var f = fun();
f();