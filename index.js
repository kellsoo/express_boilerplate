// Node core modules
const path = require("path");

// Initialize express app
const express = require("express"),
    app = express();

// Setting of global variables
require(path.join(__dirname, "config", "global-variables"));

// 3rd party modules
const { yellow } = require("chalk");

// Middleware modules
const bodyParser = require("body-parser"),
    logger = require("morgan"),
    corsStop = require(__cors_stop),
    errorHandler = require(__error_handler),
    i18n = require("i18n");

// internationalization
i18n.configure({
    locales: ["en", "de", "sk", "pl", "cz"],
    defaultLocale: "sk",
    directory: __dirname + "/locales",
    register: global,
    objectNotation: true,
    updateFiles: true,
    autoReload: true
});

// functions
const messages = require(__messages);

// env
require(__config_env);

// Setting template system - EJS
app.set("view engine", "ejs");
app.set("views");

// ------------- MIDDLEWARE ------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(require(__set_multer));
app.use(corsStop);
app.use(i18n.init);

// Routes
const mainRoutes = require(path.join(__routes, "main")),
    errorController = require(path.join(__error_controller));

// Set static files
app.use(express.static(path.join(__dirname, "public")));

// Environment variables
const PORT = process.env.PORT || 5000;
const IP = process.env.IP || "localhost";

// Main routes
app.use("/", mainRoutes);

// Error handler
app.use(errorHandler);

// 404 handle
app.use(errorController.get404);

// Server listen
app.listen(PORT, IP, () => {
    console.log(messages.successFirstMethod(`server started on ${yellow(IP)}:${yellow(PORT)}...`));
});
