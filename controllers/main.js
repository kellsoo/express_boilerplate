// Controller wrapper
const controllerWrapper = require(__middleware_wrapper);

module.exports.getView = controllerWrapper(async (req, res, next) => {
  res.status(200).render('index', {
    pageTitle: 'index',
  });
});
