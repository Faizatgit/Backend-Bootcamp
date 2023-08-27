const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('This is a home route');
})

app.get('/cat',(req,res)=>{
    res.send('Meow Meow');
})

app.get('/dog',(req,res)=>{
    res.send('Woof Woof');
})

app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send('This is a search route');
})

app.get('/login',(req,res)=>{
    const {username,password} = req.query;
    res.send(`You are trying to login with username ${username} and password ${password}`);
})

app.get('/challenge/:questionId',(req,res)=>{
    console.log(req.params);
    res.send(`Your are trying to search a challenge with requestID : ${req.params.questionId}`);
})

app.get('nodemon',(req,res)=>{
    res.send('Hello from nodemon');
})

app.listen(3000 , () => {
    console.log('Server is running at 3000 port');
})