// Node core modules
const path = require("path");

// 3rd party modules
const express = require("express"),
    router = express.Router();

// Controllers
const { getJson, getView, getTestI18n } = require(path.join(__controllers, "main"));

router.get("/", getView);

router.get("/json", getJson);

router.get("/test-i18n-node", getTestI18n);

module.exports = router;
