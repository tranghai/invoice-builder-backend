const express = require('express');
const invoiceRouter = require('./resources/invoice');
const clientRouter = require('./resources/client');
const userRouter = require('./resources/user');

const resRouter = express.Router();
resRouter.use('/invoices', invoiceRouter);
resRouter.use('/clients', clientRouter);
resRouter.use('/users', userRouter)

module.exports = resRouter;