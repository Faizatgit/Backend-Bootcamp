const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const verify = ((req,res,next)=>{
    const { username , password} = req.query;
    if(username && password === 'password')
    {
        return next();
    }
    return res.status(400).send('Invalid credentials');
});

app.use((req,res,next)=>{
    console.log("My first middleware");
    req.username = 'Faizan';
    next();
    console.log("My first middleware afte calling next");
});

app.use((req,res,next)=>{
    console.log("My second middleware");
    next();
});

app.get('/cat',(req,res)=>{
    console.log("Inside home route");
    const { username } = req;
    res.send(`Hello from ${username}`);
});

app.get('/secret',verify,(req,res)=>{
    console.log("Inside secret route");
    res.send("I dont like to entertain strangers");
});

const cache = new Map();

app.get('/cache',(req,res)=>{
    const {key} = req.query;
    if(cache.has(key))
    {
        return res.send(`Found in cache ${cache.get(key)}`);
    }

    const value = getValue();
    cache.set(key,value);
    res.send(`Not found in cache ${value}`);
});

app.listen(3000,()=>{
    console.log("Server started at 3000 port");
});

function getValue()
{
    const start = new Date().getTime();
    while(new Date().getTime() <= start + 2000) { }
    const value = Math.floor(Math.random() * 10000);
    return value;
}