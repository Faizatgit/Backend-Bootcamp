const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Order = require('./models/order');

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/pizzaDB')
.then(()=> console.log('Connection open'))
.catch((err)=> console.log(err));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from server");
});

app.get('/orders', async(req,res)=>{
    const orders = await Order.find({});
    res.status(200).json({
        statusCode: 1000,
        message: "success",
        payLoad: orders
    });
});

// Create
app.post('/orders', async(req,res)=>{
    try{
        const {name , price , qty , size} = req.body;
    const order = await Order.create({name , price , qty , size});
    res.status(201).json({
        statusCode: 1000,
        message: "Order created successfull",
        payLoad: { orderId : order._id}
    });
    }
    catch(err){
        res.status(400).json({
            statusCode: 1001,
            message: err.message,
            payLoad: null
        });
    }
});

//  Show
app.get('/orders/:id', async(req,res)=>{
    const {id} = req.params;
    const order = await Order.findById(id);
    res.status(200).json({
        statusCode: 1000,
        message: "success",
        payLoad: order
    });
});

// Implement REST apis here

app.listen(3000,()=>{
    console.log("server started at port 3000")
})