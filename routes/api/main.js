const path = require("path");

// 3rd party modules
const express = require("express"),
    router = express.Router();

// Controllers
const { getJson } = require(path.join(__controllers, "api", "main")),
    { get404 } = require(path.join(__controllers, "api", "error"));

router.get("/", getJson);
router.use(get404);

module.exports = router;
