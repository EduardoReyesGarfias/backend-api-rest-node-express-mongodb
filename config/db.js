const mongoose = require('mongoose');

const DB_URI = "mongodb://localhost:27017/rest_api";

module.exports = () =>{

    const connect = () => {

        mongoose.connect(
            DB_URI, 
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true 
            },
            (err) => {
                if(err)
                   console.log('Db error!');
                else
                    console.log('Coneccion correcta');
                
            }
        )
    }
    
    connect();
}