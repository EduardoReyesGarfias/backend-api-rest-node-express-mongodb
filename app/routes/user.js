const express = require('express');

const router = express.Router();

const controller = require('../controllers/user');

const path = 'user';

// Get data
router.get( `/${path}`,  controller.getData);

// Insertar data
router.post( `/${path}`,  controller.insertData);

// Update single row
router.put( `/${path}/update/:_id`,  controller.updateSingle);

// Delete single row
router.delete(`/${path}/delete/:_id`, controller.deleteSingle);

module.exports = router;