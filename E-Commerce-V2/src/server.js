const app = require('./app');
const db = require('./database');
const logger = require('./core/logger')

( async() => {
    try{
        await db.connectDB();
        app.listen(3000,() => {
            logger.info("Server started at port 3000");
        
        });
    }
    catch(err){
        logger.error();(err);

    }
})();