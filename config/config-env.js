// Node core
const path = require('path');
let env = 'example';

require('custom-env').env(env, path.join(__env));
