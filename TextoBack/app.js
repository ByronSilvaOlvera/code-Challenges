var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

const core = require('cors');

var textoChange = require('./routes/text-change');


var app = express();


app.use(core());
app.use( express.json() );
app.use(express.urlencoded({ extended: false }));


app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// My ROUTES
app.use('/api/textchange', textoChange);


module.exports = app;
