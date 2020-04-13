const express = require('express');

const expressLoader = require('./express');
const passportLoader = require('./passport');

const router = express.Router();

router.use(expressLoader);
router.use(passportLoader);

module.exports = router;