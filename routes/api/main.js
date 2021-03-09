const path = require('path');

// 3rd party modules
const express = require('express'),
  router = express.Router();

// Controllers
const { getJson } = require(path.join(__controllers, 'api', 'main'));

// Error Handler
const { apiErrorHandler, api404 } = require(path.join(__middleware, 'error-handler'));

router.get('/', getJson);
router.use(apiErrorHandler);
router.use(api404);

module.exports = router;
