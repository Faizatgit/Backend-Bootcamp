const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    price: {
        type: Number,
        min:[0,'Price cannot be negative or less than zero']
    },
    qty: {
        type: Number,
        default: 1
    },
    size: {
        type: String,
        Enum: {
            values:["Small" , "Medium" , "large" , "Farmhouse"],
            message: '{value} is not supported'
        }
    }
}, {timeStamp: true});

const Order  = mongoose.model('Order', orderSchema);

module.exports = Order;