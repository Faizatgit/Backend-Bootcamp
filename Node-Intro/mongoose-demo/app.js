const mongoose = require('mongoose');
const data = require('../dummyPizza');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/pizzaDB')
    .then(() => console.log('Connection open'))
    .catch((err) => console.log(err));

const OrderSchema = new mongoose.Schema({
    name: String,
    size: String,
    price: Number,
    qty: Number
});

const Order = mongoose.model('Order', OrderSchema);

Order.insertMany(data)
.then((pizzas) => {
    console.log(pizzas);
})

.catch((err) =>{
    console.log(err);
});

