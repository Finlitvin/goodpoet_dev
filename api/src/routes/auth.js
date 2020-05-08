const express = require('express');
const loginController = require('../controllers/auth');
const tryCatch = require('../helpers/tryCatch');
const validation = require('../middlewares/validation');
const userSchemas = require('../schemas/user');
const router = express.Router();

router.post('/', validation({ body: userSchemas.add }), tryCatch(loginController.login));
router.get('/', tryCatch(loginController.logout));

module.exports = router;