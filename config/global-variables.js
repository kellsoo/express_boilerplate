const path = require("path");

// ------ ROOT ------
global.__root = path.join(__dirname, "..");

// ------ Classes ------
global.__classes = path.join(__root, "classes");

// ------ Config
global.__config = path.join(__root, "config");
global.__config_env = path.join(__config, "config-env");

// ------ Controllers
global.__controllers = path.join(__root, "controllers");
global.__error_controller = path.join(__controllers, "error");

// ------ Data
global.__data = path.join(__root, "data");

// ------ ENV
global.__env = path.join(__root, "env");

// ------ Functions ------
global.__functions = path.join(__root, "functions");
global.__messages = path.join(__functions, "messages");

// ------ Middleware
global.__middleware = path.join(__root, "middleware");
global.__cors_stop = path.join(__middleware, "cors-stop");
global.__error_handler = path.join(__middleware, "error-handler");
global.__is_auth = path.join(__middleware, "is-auth");
global.__set_multer = path.join(__middleware, "set-multer");

// ------ DB models
global.__models = path.join(__root, "models");

// ------ Public
global.__public = path.join(__root, "public");

// ------ Routes
global.__routes = path.join(__root, "routes");

// ------ Util
global.__util = path.join(__root, "util");
global.__db_handler = path.join(__util, "sequelize-dev");

// ------ Views
global.__views = path.join(__root, "views");
// Includes
global.__includes = path.join(__views, "includes");
global.__head_include = path.join(__includes, "head");
global.__end_include = path.join(__includes, "end");
