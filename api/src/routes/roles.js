const express = require('express');
const userController = require('../controllers/users');
const tryCatch = require('../helpers/tryCatch');
const validation = require('../middlewares/validation');
const paramsSchema = require('../schemas/params');
const isAuthorized = require('../middlewares/isAuthorized');
const isAdmin = require('../middlewares/isAdmin');
const router = express.Router();

router.use(validation({params: paramsSchema.id}));

router.use(isAuthorized, isAdmin);

router.get('/', tryCatch(userController.getRole));
router.get('/:id', tryCatch(userController.getRoleById));

module.exports = router;