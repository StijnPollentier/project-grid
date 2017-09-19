var express = require('express');
var router = express.Router();

var ctrlData = require('../controllers/data.controllers.js');

router
    .route('/data')
    .get(ctrlData.getKlanten);

module.exports = router;