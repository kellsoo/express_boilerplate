const { join } = require('path');

// ------ ROOT ------
global.__root = join(__dirname, '..');

// ------ Classes ------
global.__classes = join(__root, 'classes');
global.__error_response = join(__classes, 'ErrorResponse');

// ------ Config
global.__config = join(__root, 'config');
global.__config_env = join(__config, 'config-env');

// ------ Controllers
global.__controllers = join(__root, 'controllers');
global.__error_controller = join(__controllers, 'error');

// ------ Data
global.__data = join(__root, 'data');

// ------ ENV
global.__env = join(__root, 'env');

// ------ Functions ------
global.__functions = join(__root, 'functions');
global.__api_response = join(__functions, 'api-response');
global.__messages = join(__functions, 'messages');

// ------ Logs ------
global.__logs = join(__root, 'logs');
global.__system_logs = join(__logs, 'system.log');
global.__system_error_logs = join(__logs, 'system-error.log');
global.__access_logs = join(__logs, 'access.log');
global.__access_error_logs = join(__logs, 'access-error.log');

// ------ Middleware
global.__middleware = join(__root, 'middleware');
global.__cors_stop = join(__middleware, 'cors-stop');
global.__error_handler = join(__middleware, 'error-handler');
global.__controller_wrapper = join(__middleware, 'controller-wrapper');

// ------ DB models
global.__models = join(__root, 'models');

// ------ Public
global.__public = join(__root, 'public');

// ------ Routes
global.__routes = join(__root, 'routes');

// ------ Util
global.__util = join(__root, 'util');
// ------ Views
global.__views = join(__root, 'views');
// Includes
global.__includes = join(__views, 'includes');
global.__head_include = join(__includes, 'head');
global.__end_include = join(__includes, 'end');
