// Node core modules
const { join } = require('path');

// 3rd party modules
const express = require('express'),
  router = express.Router();

// Controllers
const { getView } = require(join(__controllers, 'main'));

// Error Handler
const { viewErrorHandler, view404 } = require(join(
  __middleware,
  'error-handler'
));

router.route('/').get(getView);

router.use(viewErrorHandler);
router.use(view404);

module.exports = router;
