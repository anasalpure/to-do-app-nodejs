const express = require('express');
const toDosRoutes = require('./api/toDos');
const authRoutes = require('./api/auth');
const AuthenticateMiddleware = require('../middleware/auth');

const router = express.Router();

router.use('/auth',authRoutes);
router.use('/todos',AuthenticateMiddleware , toDosRoutes);



module.exports = router;