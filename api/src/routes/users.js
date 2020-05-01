const express = require('express');
const userController = require('../controllers/users');
const tryCatch = require('../helpers/tryCatch');
const router = express.Router();

router.post('/add', tryCatch(userController.addUser));

module.exports = router;