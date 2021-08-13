const express = require ('express');

const app = express();

const port = 3001;

// Manejar las rutas, recibir y responder
app.get('/', (req, res) => {
    res.send({
        data: 'Hola mundo desde request'
    })
});

// Levantar el servicio
app.listen(port, () =>{
    console.log('Aplicacion corriendo');
})