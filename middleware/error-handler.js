// Node core components
const { join } = require('path');

// Classes
const ErrorResponse = require(__error_response);
// 3rd party modules
var statuses = require('statuses');
var moment = require('moment');

module.exports.viewErrorHandler = (error, req, res, next) => {
  const errorObj = createErrorObj(error);
  errorObj.pageTitle = errorObj.statusCode;
  res.status(errorObj.statusCode).render('500', errorObj);
};

module.exports.apiErrorHandler = (error, req, res, next) => {
  const errorObj = createErrorObj(error);
  const { statusCode, status, message, stack } = errorObj;
  const date = moment();
  const obj = {
    statusCode,
    status,
    date,
    timestamp: date.unix(),
    message,
    stack
  };
  res.status(statusCode).json(obj);
};

const createErrorObj = (error) => {
  if (typeof error !== 'object' || !error.statusCode) error = new ErrorResponse(500, error);
  const { statusCode, message, status, stack } = error;
  error.saveToFile();
  const errorObj = {
    statusCode,
    status,
    message,
    stack
  };
  return errorObj;
};
