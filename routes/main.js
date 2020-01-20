// Node core modules
const path = require("path");

// 3rd party modules
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).render("index", {
        pageTitle: "index"
    });
});

module.exports = router;
