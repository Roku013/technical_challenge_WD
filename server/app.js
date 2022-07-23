'use strict';

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const expressSession = require('express-session');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const baseRouter = require('./routes/base');
const expressSessionOptions = require('./express-session-options.js');
const corsOptions = require('./cors-options.js');

const app = express();

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(expressSession(expressSessionOptions));

app.use('/', baseRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
