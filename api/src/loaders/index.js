const express = require('express');

const expressLoader = require('./express');
const passportLoader = require('./passport');
const routesLoader = require('./routes');

const router = express.Router();

router.use(expressLoader);
router.use(passportLoader);
router.use(routesLoader);

module.exports = router;