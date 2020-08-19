// Node core
const path = require("path");
let env;
env = require("custom-env").env("example", path.join(__env));

module.exports = env;
