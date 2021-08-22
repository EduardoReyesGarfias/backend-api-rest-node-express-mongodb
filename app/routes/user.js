const express = require('express');

const router = express.Router();

const controller = require('../controllers/user');

const path = 'user';

// Recibir 
router.get( `/${path}`,  controller.getData);

router.post( `/${path}`,  controller.insertData);

module.exports = router;