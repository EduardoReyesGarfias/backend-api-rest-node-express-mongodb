const model = require('../models/user');

/**
 * Get data form BD
 * @param {http peticion} req 
 * @param {http response} res 
 */
exports.getData = (req, res) =>{
    // Get normal
    /*
    model.find({},(err, docs) =>{
        res.send({
            docs:docs
        })
    });
    */

    let optionsPaginate = {
        page: 1,
        limit: 2
    }

    optionsPaginate.page = req.query.page;
    optionsPaginate.limit = req.query.limit;
    
    // Get con paginacion
    model.paginate( {}, optionsPaginate, (err, docs) =>{

        res.send( { data: docs } )

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