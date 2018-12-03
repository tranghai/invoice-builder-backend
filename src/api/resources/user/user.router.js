const express = require('express');
const userController = require('./user.controller');
const passport  = require('passport');

const router = express.Router();
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);
router.put('/reset-password', passport.authenticate('jwt', { session: false }), userController.resetPassword);
router.post('/test', passport.authenticate('jwt', { session: false }), userController.test);

module.exports = router;