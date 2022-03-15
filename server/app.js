const { join } = require('path');
const express = require('express');
const compression = require('compression');
const userRouter = require('./router/user');
const doctorRouter = require('./router/doctor');
const reviewRouter = require('./router/reviews');

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 8000);
app.use('/', userRouter);
app.use('/doctors', doctorRouter);
app.use('/reviews', reviewRouter);

module.exports = app;
