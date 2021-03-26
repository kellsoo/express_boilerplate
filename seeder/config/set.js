// Node core components
const { join } = require('path');

// 3rd party
const colors = require('colors');

// Setting of global paths and variables
global.__seeder_config = __dirname;
global.__seeder_menu_settings = join(__seeder_config, 'menu-settings.json');
global.__seeder_root = join(__seeder_config, '..');
global.__seeder_functions = join(__seeder_root, 'seeder-functions');
global.__seeder_menu = join(__seeder_root, 'menu');

require(join(__dirname, '..', '..', 'config', 'global-paths'));
require(join(__dirname, '..', '..', 'config', 'global-variables'));
