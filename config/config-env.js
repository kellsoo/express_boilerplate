// Node core
const path = require("path");

const env = require("custom-env").env("development", path.join(__env));

module.exports = env;
