const mongoose  = require('mongoose');
const { default: logger } = require('../core/logger');

const connectDB = async() => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/E-Comm-DB')
        logger.info("Database connection open");
    }
    catch(err)
    {
        logger.error(err);
        disconnectDB();
        logger.info("Database connection closed");
    }
}

const disconnectDB = async() => {
    await mongoose.disconnect();
}

module.exports = {
    connectDB,
    disconnectDB
}