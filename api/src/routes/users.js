const express = require('express');
const userController = require('../controllers/users');
const tryCatch = require('../helpers/tryCatch');
const validation = require('../middlewares/validation');
const userSchema = require('../schemas/user');
const paramsSchema = require('../schemas/params');
const isAuthorized = require('../middlewares/isAuthorized');
const isAdmin = require('../middlewares/isAdmin');
//const isAuthor = require('../middlewares/isAuthor');
const router = express.Router();

router.use(validation({params: paramsSchema.id}));

router.post('/add', validation({ body: userSchema.add }) ,tryCatch(userController.addUser));

router.use(isAuthorized);

router.get('/:id/profile', tryCatch(userController.getProfileByUserId));
router.get('/profile', tryCatch(userController.getMyProfile));
router.get('/favorite', tryCatch(userController.getAllFavorites));
router.post('/favorite', tryCatch(userController.addFavorite));
router.delete('/favorite/:id', tryCatch(userController.deleteFavorite));

router.post('/poems', tryCatch(userController.addPoem));
router.get('/poems', tryCatch(userController.getMyPoems));
router.get('/poem/:id', tryCatch(userController.getMyPoemById));
router.get('/:id/poems', tryCatch(userController.getPoemByUserId));
router.delete('/poem/:id', tryCatch(userController.deletePoem));
router.put('/poem/:id', tryCatch(userController.updatePoem));

router.use(isAuthorized, isAdmin);

router.get('/:id', tryCatch(userController.getUserById));
router.get('/', tryCatch(userController.getAllUsers));

module.exports = router;