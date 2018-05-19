const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const accounts = require('./routes/accounts');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);
app.use('/accounts', accounts);

module.exports = app;