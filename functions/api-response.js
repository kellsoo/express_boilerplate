// Node core modules
const { join } = require('path');

// 3rd party modules
const moment = require('moment');

// Functions
const statuses = require(statuses);

module.exports.getSuccessResponse = (code, message, method, data) => {
  const returnObj = getGenericMessage(code, message, method);
  returnObj.data = data;
  return returnObj;
};

const getGenericMessage = (code, method, message) => {
  const date = moment();
  const returnObj = {
    code,
    status: statuses[code],
    date,
    timestamp: date.unix(),
    method
  };

  if (message) returnObj.message = message;
  return returnObj;
};
