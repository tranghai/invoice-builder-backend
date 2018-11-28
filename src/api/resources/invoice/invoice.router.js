const express = require('express');
const invoiceController = require('./invoice.controller');

const router = express.Router();

router.route('/')
        .get(invoiceController.findAll)
        .post(invoiceController.createOne);

router.route('/:id')
        .get(invoiceController.findOne)
        .put(invoiceController.update)
        .delete(invoiceController.delete);

module.exports = router;