const express = require('express');
const router = express.Router();
const data = require('../data');

/* GET accounts*/
router.get('/', function (req, res, next) {
    res.json(data.accounts);
});

module.exports = router;
