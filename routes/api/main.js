const { join } = require('path');

// 3rd party modules
const express = require('express');
const router = express.Router();

// Controllers
const { getJson } = require(join(__controllers, 'api', 'main'));

// Error Handler
const { apiErrorHandler, api404 } = require(join(
  __middleware,
  'error-handler'
));

router.get('/', getJson);
router.use(apiErrorHandler);
router.use(api404);

module.exports = router;
