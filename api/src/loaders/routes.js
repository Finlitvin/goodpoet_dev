const express = require('express');
const NotFound = require('../middlewares/notFound');
const errorHandler = require('../middlewares/errorHandler');

const loginRoute = require('../routes/auth');

const router = express.Router();

router.use('/auth', loginRoute);
router.use(NotFound);
router.use(errorHandler);

module.exports = router;