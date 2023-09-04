const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');

mongoose.set('strictQuery' , false);
mongoose.connect('mongodb://127.0.0.1:27017/blog-DB', { useNewUrlParser: true, useUnifiedTopology: true })    .then(() => {
        console.log("DB connected");
    })
    .catch((err)=>{
        console.log(err);
    })

app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.json());
app.use('/blogs',blogRoutes);

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});