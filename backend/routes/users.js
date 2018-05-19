const express = require('express');
const router = express.Router();
const data = require('../data');

/* GET users */
router.get('/', function (req, res, next) {
    res.status(200).json({...data.users[0]});
});

/* Mock user data update */
router.post('/', function (req, res, next) {
    res.status(200).json({
        message: 'Update successful'
    });
});

module.exports = router;
