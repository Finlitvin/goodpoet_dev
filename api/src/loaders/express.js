const express = require('express');
const session = require('express-session');
const sessionConfig = require('../config/session');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use(session(sessionConfig));

module.exports = router;