const express = require('express');
const invoiceRouter = require('./resources/invoice');
const clientRouter = require('./resources/client');
const userRouter = require('./resources/user');
const authRouter = require('./resources/auth');

const restRouter = express.Router();
restRouter.use('/invoices', invoiceRouter);
restRouter.use('/clients', clientRouter);
restRouter.use('/users', userRouter);
restRouter.use('/auth', authRouter);

module.exports = restRouter;