const mongoose = require('mongoose');

mongoose.set('strictQuery',false)
mongoose.connect('mongodb://127.0.0.1:27017/todoDB', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));

const orderSchema = new mongoose.Schema({
    name: String,
    price: Number,
    size: String,
    qty: Number
});

const Order = mongoose.model('Order' , orderSchema);

async function main(){
    const result = await Order.aggregate([
        {
            $group: {
                _id: '$size',
                pizzaSize: {'$first' : '$size'},
                totalQuantity:
                { $sum: '$qty'} 
            }
        },
        {
            $sort: {
                totalQuantity: -1
            }
        }
    ])
    console.log(result);
}

main();