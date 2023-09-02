const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const val = Math.floor(Math.random() * 100000);
    try{
        if(val % 3 ===0)
        {
            throw new Error(`${val} is divisible by 3`);
        }
        return res.status(200).send('Everything is fine');
    }
    catch(err){
        res.status(400).send(`value: ${err.message}`);
    }
});

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});


// url for error handling documents: https://expressjs.com/en/guide/error-handling.html