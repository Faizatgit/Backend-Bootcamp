//  Immediately invoked function expression



(
    function ()
    {
        var a = 100;
        var b = 200;

        function fun()
        {
            console.log('inside Fun');
            console.log(a+b);
        }
        fun();
    }

)();