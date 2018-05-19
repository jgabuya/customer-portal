const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const accounts = require('./routes/accounts');

const app = express();

// enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);
app.use('/accounts', accounts);

module.exports = app;