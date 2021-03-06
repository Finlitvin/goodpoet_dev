const express = require('express');
const cors = require('cors');

const NotFound = require('../middlewares/notFound');
const errorHandler = require('../middlewares/errorHandler');

const loginRoute = require('../routes/auth');
const userRoute = require('../routes/users');
const poemRoute = require('../routes/poems');
const roleRoute = require('../routes/roles');

const router = express.Router();


router.use(cors());

router.use('/auth', loginRoute);
router.use('/users', userRoute);
router.use('/poems', poemRoute);
router.use('/roles', roleRoute);
console.log('ROUTES [+]');
router.use(NotFound);
router.use(errorHandler);

module.exports = router;