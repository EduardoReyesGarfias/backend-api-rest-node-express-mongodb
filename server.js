const express = require ('express');
const initDB = require('./config/db');
const app = express();

const port = 3001;

// Manejar las rutas, recibir y responder
/*
app.get('/', (req, res) => {
    res.send({
        data: 'Hola mundo desde request'
    })
});
*/
const userRouters = require('./app/routes/user');
const itemsRouters = require('./app/routes/items');


app.use(userRouters);
app.use(itemsRouters);


// Levantar el servicio
app.listen(port, () =>{
    console.log('Aplicacion corriendo');
})


initDB();