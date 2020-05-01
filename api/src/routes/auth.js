const express = require('express');
const loginController = require('../controllers/auth');
const tryCatch = require('../helpers/tryCatch');
const router = express.Router();

router.post('/', tryCatch(loginController.login));
router.get('/', tryCatch(loginController.logout));

module.exports = router;