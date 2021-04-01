// Node core components
const { join } = require('path');
const { readFileSync } = require('fs');

// Initialize express app
const express = require('express');
const app = express();

// Setting of global paths and variables
require(join(__dirname, 'global-paths'));
require(join(__dirname, 'global-variables'));

// config file
// const configVars = JSON.parse(readFileSync(join(__config, 'config.json')));
const configVars = require(join(__config, 'config'));

// Env variables
require('custom-env').env(configVars.env, __env);
let { NODE_ENV } = process.env;
NODE_ENV = NODE_ENV.toUpperCase();

// 3rd party modules
const colors = require('colors');

// Middleware modules
const morgan = require('morgan');
const corsStop = require(__cors_stop);

// Setting template system - EJS
app.set('view engine', 'ejs');
app.set('views');

// ------------- MIDDLEWARE ------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Logger
if (NODE_ENV.includes('DEV')) app.use(morgan('dev'));
app.use(morgan('combined', { stream: __access_logs_stream }));

app.use(corsStop);

// Set static files
app.use(express.static(join(__dirname, '..', 'public')));
app.use('/logs', express.static(join(__dirname, '..', 'logs')));

module.exports = app;
