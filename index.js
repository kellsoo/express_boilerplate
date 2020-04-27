// Node core modules
const path = require("path");

// Initialize express app
const express = require("express");
const app = express();

// Middleware modules initializing
const bodyParser = require("body-parser");
const logger = require("morgan");

// Setting of global variables
require(path.join(__dirname, "config", "global-variables"));

// functions
const messages = require(__messages);

// env
require(__config_env);

// Setting template system - EJS
app.set("view engine", "ejs");
app.set("views");

// Adding middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

// Routes
const mainRoutes = require(path.join(__routes, "main"));
const errorController = require(path.join(__error_controller));

// Set static files
app.use(express.static(path.join(__dirname, "public")));

// Environment variables
const PORT = process.env.PORT || 5000;
const IP = process.env.IP || "localhost";

// Main routes
app.use("/", mainRoutes);

// 404 handle
app.use(errorController.get404);

// Server listen
app.listen(PORT, IP, () => {
    console.log(messages.successFirstMethod(`server started on ${IP}:${PORT}...`));
});
