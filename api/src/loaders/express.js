const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const sessionConfig = require('../config/session');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(session(sessionConfig));

module.exports = router;