// Node core modules
const { join } = require('path');

// 3rd party modules
const moment = require('moment');

// Functions
const statuses = require('statuses');

module.exports.getSuccessResponse = (code, method, message) => {
  const date = moment();
  const returnObj = {
    code,
    status: statuses[code],
    date,
    timestamp: date.unix(),
    method,
    message: message || undefined,
  };

  if (message) returnObj.message = message;
  return returnObj;
};
