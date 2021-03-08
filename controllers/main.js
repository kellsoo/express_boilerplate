// Controller wrapper
const controllerWrapper = require(__controller_wrapper);

// ErrorResponse
const ErrorResponse = require(__error_response);

module.exports.getView = controllerWrapper((req, res, next) => {
  throw new ErrorResponse(500, 'test');
  res.status(200).render('index', {
    pageTitle: 'index'
  });
});
