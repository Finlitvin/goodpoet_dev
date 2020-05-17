const express = require('express');
const userController = require('../controllers/users');
const tryCatch = require('../helpers/tryCatch');
const validation = require('../middlewares/validation');
const userSchema = require('../schemas/user');
const paramsSchema = require('../schemas/params');
const router = express.Router();

router.use(validation({params: paramsSchema.id}));

router.post('/add', validation({ body: userSchema.add }) ,tryCatch(userController.addUser));
router.get('/:id/profile', tryCatch(userController.getProfileByUserId));
router.get('/profile', tryCatch(userController.getMyProfile));

module.exports = router;