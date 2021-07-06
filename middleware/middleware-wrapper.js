// Classes
const ErrorResponse = require(__error_response);

module.exports = (fn, middlewareName) => (req, res, next) => {
  const isMiddlewareAsync = fn.constructor.name === 'AsyncFunction';
  if (isMiddlewareAsync) {
    // Async middleware
    Promise.resolve(fn(req, res, next)).catch((err) => {
      const error = ErrorResponse.createError(err, middlewareName);
      return next(error);
    });
  } else {
    // Normal middleware
    fn(req, res, next);
    try {
    } catch (err) {
      const error = ErrorResponse.createError(err, middlewareName);
      return next(error);
    }
  }
};
