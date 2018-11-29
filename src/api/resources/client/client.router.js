const express = require('express');
const clientController = require('./client.controller');
const router = express.Router();
const passport = require('passport');

router.route('/')
        .get(passport.authenticate('jwt', { session: false }), clientController.findAll)
        .post(passport.authenticate('jwt', { session: false }), clientController.create);

router.route('/:id')
        .get(passport.authenticate('jwt', { session: false }), clientController.findOne)
        .put(passport.authenticate('jwt', { session: false }), clientController.update)
        .delete(passport.authenticate('jwt', { session: false }), clientController.delete);
        
module.exports = router;