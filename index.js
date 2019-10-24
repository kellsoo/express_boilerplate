// Node core modules
const path = require('path');

// 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');

// Modules
const errorController = require(path.join(__dirname, 'controllers', 'error'));

// Initialize express app
const app = express();

// ---------- ejs -----------
app.set('view engine', 'ejs');
app.set('views')

// Body-parser, false means that you cannot parse nested objects!!!!
app.use(bodyParser.urlencoded({ extended: false }));

// Environment variables
const PORT = process.env.PORT || 5000;
const IP = process.env.ip || 'localhost';

// 404 handle
app.use(errorController.get404);

// Server listen 
app.listen(PORT, IP, () => {
    console.log('-----------------------------------');
    console.log(`server started on ${IP}:${PORT}...`);
    console.log('-----------------------------------');

});