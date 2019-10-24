// Node core modules
const path = require('path');

// 3rd party modules
const express = require('express');

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('ok');
});

module.exports = router;