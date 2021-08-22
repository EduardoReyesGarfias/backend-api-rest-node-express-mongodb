const model = require('../models/user');


/**
 * Get data form BD
 * @param {http peticion} req 
 * @param {http response} res 
 */
exports.getData = (req, res) =>{
    //res.send({data: 'Esto viene desde ruta del controlador'})
    model.find({},(err, docs) =>{
        res.send({
            docs:docs
        })
    });
};

/**
 * INsert data in BD
 * @param {http peticion} req 
 * @param {http response} res 
 */
exports.insertData = (req, res) =>{
    const data = req.body;
    //res.send({ data:data }); // Probar que si llega la informacion
    model.create( data, (err, docs) =>{
        
        // mongoError: E11000 significa duplicate Key
        if(err)
            res.send({error: err});
        else 
            res.send({ data: docs });
    });
}