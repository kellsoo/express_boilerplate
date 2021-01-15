// Node core modules
const path = require('path');

// Initialize express app
const express = require('express'),
  app = express();

// Setting of global variables
require(path.join(__dirname, 'config', 'global-variables'));

// 3rd party modules
const { yellow } = require('chalk');

// Middleware modules
const logger = require('morgan'),
  corsStop = require(__cors_stop),
  errorHandler = require(__error_handler);

// functions
const messages = require(__messages);

// env
require(__config_env);

// Setting template system - EJS
app.set('view engine', 'ejs');
app.set('views');

// ------------- MIDDLEWARE ------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));
app.use(require(__set_multer));
app.use(corsStop);

// Routes
const mainRoutes = require(path.join(__routes, 'main')),
  apiRoutes = require(path.join(__routes, 'api', 'main'));

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

// Environment variables
const PORT = process.env.PORT || 5000;
const IP = process.env.IP || 'localhost';

// Main routes
app.use('/api', apiRoutes);
app.use('/', mainRoutes);

// Error handler
app.use(errorHandler);

// Server listen
app.listen(PORT, IP, () => {
  console.log(messages.successFirstMethod(`server started on ${yellow(IP)}:${yellow(PORT)}...`));
});
