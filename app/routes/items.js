const express = require('express');

const router = express.Router();

const controller = require('../controllers/items');

const path = 'items';

router.get(`/${path}`, controller.getData);

module.exports = router;