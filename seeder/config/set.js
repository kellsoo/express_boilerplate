// Node core components
const { join } = require('path');

// 3rd party
const colors = require('colors');

// Setting of global paths and variables
global.__seeder_config = __dirname;
global.__seeder_root = join(__seeder_config, '..');

require(join(__dirname, '..', '..', 'config', 'global-paths'));
require(join(__dirname, '..', '..', 'config', 'global-variables'));
