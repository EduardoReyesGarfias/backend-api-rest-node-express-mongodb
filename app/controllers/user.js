const { ObjectId } = require('mongodb');
const model = require('../models/user');

/**
 * Transforma de string a ObjectId de monogo
 * @param {string} id 
 * @returns id in type ObjectId
 */
const parseId = id =>{
    return ObjectId(id);
}

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
 * Insert data in BD
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

/**
 * Update single row
 * @param {http request} req 
 * @param {http response} res 
 */
exports.updateSingle = (req, res) =>{

    const id = req.params._id;
    const dataUpdate = req.body;
    
    model.updateOne(
        { _id: parseId(id)},
        dataUpdate,
        (err, docs) =>{
            res.send( {items : docs} );
        }
    );
    
}

/**
 * Delete single row
 * @param {http request} req 
 * @param {http response} res 
 */
exports.deleteSingle = (req, res) =>{

    const id = req.params._id;
    
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) =>{
            res.send({ items: docs });
        }
    );

}