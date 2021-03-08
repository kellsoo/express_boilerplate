// 3rd party modules
const moment = require('moment');

//  ------ System logs -----
module.exports.createSuccessSystemLog = (message) => {
  let systemLog = `${moment().format('YYYY-MM-DD hh:mm:ss')} :-: ${message}\n`;
  __system_logs_stream.write(systemLog);
};

module.exports.createErrorSystemLog = (err) => {
  err = new Error(err);
  const { name, message, stack } = err;
  let systemLog = `${moment().format('YYYY-MM-DD hh:mm:ss')} :-: name: ${name} :-: message:${message} :-: ${stack}\n\n`;
  __system_error_logs_stream.write(systemLog);
};
