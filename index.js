// Node core modules
const { join } = require('path');

// Initialize express app
const express = require('express');
const app = express();

// Setting of global paths and variables
require(join(__dirname, 'config', 'global-paths'));
require(join(__dirname, 'config', 'global-variables'));

// Env variables
require(__config_env);
let { PORT, IP, NODE_ENV } = process.env;
NODE_ENV = NODE_ENV.toUpperCase();

// 3rd party modules
const colors = require('colors');

// Middleware modules
const morgan = require('morgan');
const corsStop = require(__cors_stop);

// functions
const { successFirstMethod } = require(__messages);
const { createSuccessSystemLog, createErrorSystemLog } = require(join(__functions, 'system-logger'));

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
app.use(express.static(join(__dirname, 'public')));
app.use('/logs', express.static(join(__dirname, 'logs')));

//  ------- Routes Part -------
const mainRoutes = require(join(__routes, 'main'));
const apiRoutes = require(join(__routes, 'api', 'main'));

// Main routes
app.use('/api', apiRoutes);
app.use('/', mainRoutes);

// ----------- Server part -------
// ENV variables settings
PORT = PORT || 5000;
IP = IP || 'localhost';

// Server listen
app.listen(PORT, IP, () => {
  try {
    console.log(successFirstMethod(`server started on ${IP.yellow}:${PORT.yellow}...`));
    createSuccessSystemLog(`server started on ${IP}:${PORT}`);
  } catch (err) {
    createErrorSystemLog(err);
  }
});

process.on('unhandledRejection', (err) => {
  err = new Error(err);
  err.name = 'unhandledRejection';
  createErrorSystemLog(err);
  process.exit(1);
});
