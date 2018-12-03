const express = require('express');
const invoiceController = require('./invoice.controller');
const passport = require('passport');

const router = express.Router();

router.route('/')
        .get(passport.authenticate('jwt', { session: false }), invoiceController.findAll)
        .post(passport.authenticate('jwt', { session: false }), invoiceController.create);

router.route('/:id')
        .get(passport.authenticate('jwt', { session: false }), invoiceController.findOne)
        .put(passport.authenticate('jwt', { session: false }), invoiceController.update)
        .delete(passport.authenticate('jwt', { session: false }), invoiceController.delete);

router.get('/:id/download', passport.authenticate('jwt', { session: false }), invoiceController.download);   
module.exports = router;