const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogRoutes');

mongoose.set('strictQuery' , false)
mongoose.connect('mongodb://127.0.0.1:27017/blogs-DB', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Db conneted");
})
.catch((err)=>{
    console.log(err);
});

app.use(express.json());

app.use('/blogs',blogRoute);

app.use((err,req,res,next)=>{
    const message = err.message || 'Something went wrong'
    res.status(500).json({message: message});
});

app.listen(3001,()=>{
    console.log("Server started at 3001 port");
});