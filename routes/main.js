// Node core modules
const path = require("path");

// 3rd party modules
const express = require("express"),
    router = express.Router();

// Controllers
const { getJson, getView } = require(path.join(__controllers, "main"));

router.get("/", getView);

router.get("/json", getJson);

module.exports = router;
