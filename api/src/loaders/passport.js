const express = require('express');
const passport = require('passport');
const passportLocal = require('../passport');

const router = express.Router();

passportLocal(passport);
router.use(passport.initialize());
router.use(passport.session());

module.exports = router;