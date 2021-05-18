const express = require('express');
const tryCatch = require('../helpers/tryCatch');
const validation = require('../middlewares/validation');
const poemsController = require('../controllers/poems');
const paramsSchema = require('../schemas/params');

const router = express.Router();

router.use(validation({params: paramsSchema.id}));

router.get('/', tryCatch(poemsController.getPoem));
console.log('[GET] /poems/');
router.get('/:id', tryCatch(poemsController.getPoemById));
console.log('[GET] /poems/:id');
console.log('--------------------------');

module.exports = router;