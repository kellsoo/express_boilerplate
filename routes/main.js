// Node core modules
const path = require("path");

// 3rd party modules
const express = require("express"),
    router = express.Router();

// Controllers
const { getView } = require(path.join(__controllers, "main")),
    { get404 } = require(path.join(__controllers, "error"));

// router.get("/", testMiddleware, getView);
router.route("/").get(getView);

router.use(get404);

module.exports = router;
