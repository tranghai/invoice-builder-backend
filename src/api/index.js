const express = require('express');
const invoiceRouter = require('./resources/invoice');
const clientRouter = require('./resources/client');

const resRouter = express.Router();
resRouter.use('/invoices', invoiceRouter);
resRouter.use('/clients', clientRouter);

module.exports = resRouter;