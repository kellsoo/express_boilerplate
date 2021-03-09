// Classes
const ErrorResponse = require(__error_response);

module.exports.view404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: '404'
  });
};

module.exports.api404 = (req, res, next) => {
  const error404 = new ErrorResponse(404, 'Page not found!');
  const errorObj = createErrorObj(error404);
  res.status(404).json(errorObj);
};

module.exports.viewErrorHandler = (error, req, res, next) => {
  const errorObj = createErrorObj(error);
  errorObj.pageTitle = errorObj.statusCode;
  res.status(errorObj.statusCode).render('500', errorObj);
};

module.exports.apiErrorHandler = (error, req, res, next) => {
  const errorObj = createErrorObj(error);
  const { statusCode } = errorObj;
  res.status(statusCode).json(errorObj);
};

const createErrorObj = (error) => {
  if (typeof error !== 'object' || !error.statusCode) error = new ErrorResponse(500, error);
  const { statusCode, message, status, stack, date, timestamp } = error;
  error.saveToFile();
  const errorObj = {
    statusCode,
    status,
    date,
    timestamp,
    message,
    stack
  };
  return errorObj;
};
