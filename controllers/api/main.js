// Controller wrapper
const controllerWrapper = require(__controller_wrapper);

module.exports.getJson = controllerWrapper((req, res, next) => {
  throw 'test';
  res.status(200).json({
    message: 'index'
  });
});
