const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

const todos = [
    "Go to gym",
    "Learn web",
    "Go for shopping"
];

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`You are using ${subreddit} subreddit`);
});

app.get('/hello',(req,res)=>{
    res.render('hello');
});

app.get('/random',(req,res)=>{
    const randomNum = Math.floor(Math.random() * 100 + 1 );
    res.render('random',{ randomNum:randomNum});
});

app.get('/todos',(req,res)=>{
    res.render('todos',{todoList:todos});
});

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});