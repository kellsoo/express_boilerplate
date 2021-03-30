// Controller wrapper
const controllerWrapper = require(__controller_wrapper);

// api response
const { getSuccessResponse } = require(__api_response);

module.exports.getJson = controllerWrapper((req, res, next) => {
  const response = getSuccessResponse(200, 'method.js', req.method, []);
  res.status(response.code).json(response);
});
