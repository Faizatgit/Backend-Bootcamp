const app = require('./app');
const db = require('./database');

( async() => {
    try{
        await db.connectDB();
        app.listen(3000,() => {
            console.log("Server started at port 3000");
        });
    }
    catch(err){
        console.log(err);

    }
})();