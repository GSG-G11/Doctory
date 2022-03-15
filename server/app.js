
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./router');


const app = express();

app.disable('x-powered-by');
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(join(__dirname, '..' , 'public')));
app.set('port', process.env.PORT || 8000);
app.use(router)

module.exports = app;
