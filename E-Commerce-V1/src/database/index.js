const mongoose  = require('mongoose');

const connectDB = async() => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/E-Comm-DB')
        console.log("Db connected");
    }
    catch(err)
    {
        console.log(err);
        disconnectDB();
        console.log("Connection closed");
    }
}

const disconnectDB = async() => {
    await mongoose.disconnect();
}

module.exports = {
    connectDB,
    disconnectDB
}