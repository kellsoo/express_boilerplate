const path = require("path");

exports.setGlobalVariables = () => {
    return new Promise((resolve, reject) => {
        // ------ ROOT
        global.__root = path.join(__dirname, "..");

        // ------ Classes
        global.__classes = path.join(__root, "classes");
        global.__messages = path.join(__classes, "Messages");

        // ------ Config
        global.__config = path.join(__root, "config");
        global.__config_env = path.join(__config, "config-env");
        // ------ DB connect
        global.__connect_db = path.join(__config, "connect-db");

        // ------ Controllers
        global.__controllers = path.join(__root, "controllers");
        global.__error_controller = path.join(__controllers, "error");

        // ------ Data
        global.__data = path.join(__root, "data");
        global.__fill_data = path.join(__data, "fill_data");

        // ------ ENV
        global.__env = path.join(__root, "env");

        // ------ Middleware
        global.__middleware = path.join(__root, "middleware");

        // ------ DB models
        global.__models = path.join(__root, "models");
        global.__prices_models = path.join(__models, "prices");
        global.__logger_models = path.join(__models, "logger");

        // ------ Public
        global.__public = path.join(__root, "public");

        // ------ Routes
        global.__routes = path.join(__root, "routes");

        // ------ Util
        global.__util = path.join(__root, "util");
        global.__db_handler = path.join(__util, "sequelize-dev");

        // ------ Views
        global.__views = path.join(__root, "views");

        resolve("Global variables set...");
    });
};
