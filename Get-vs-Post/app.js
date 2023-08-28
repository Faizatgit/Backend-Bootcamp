const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended: true , limit:'10mb'}));
app.use(express.json({limit: '10mb'}));

app.get('/' , (req,res)=>{
    res.render('index');
})

app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send('You made a get request');
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('You made a post request');
})

app.post('/todos',(req,res)=>{
    const todos = [{id:1 , task: "Go to gym"},{id:2 , tast: "Study"}];
    res.status(200).json(todos);
})

app.set('*',(req,res)=>{
    res.send('You made an invalid request');
})

app.all('*',(req,res)=>{
    res.send('You a requesting an invalid url');
})

app.listen(3000,()=>{
    console.log('Server started at post 3000');
})