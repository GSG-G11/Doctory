const { join } = require('path');
const express = require('express');
const compression = require('compression');
const userRouter = require('./router/user');

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 8000);
app.use('/', userRouter);

module.exports = app;
