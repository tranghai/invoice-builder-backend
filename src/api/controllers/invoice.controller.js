
const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const Invoice = require('../models/invoice.model');

const invoices = [
    { _id: "10001", item:"Amazon Product 1", qty: 10},
    { _id: "10002", item:"Amazon Product 2", qty: 20},
    { _id: "10003", item:"Amazon Product 3", qty: 30},
];

module.exports = { 
    findAll(req, res, next) {
        return res.json(invoices);
        // Invoice.find()
        //     .then(invoices => res.json(invoices))
        //     .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    createOne(req, res, next) {
        const schema = Joi.object().keys({
            item: Joi.string().required(),
            date: Joi.date().required(),
            due: Joi.date().required(),
            qty: Joi.number()
                .integer()
                .required(),
            tax: Joi.number().optional(),
            rate: Joi.number().optional(),
        });

        const { error, value } = Joi.validate(req.body, schema);

        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }

        Invoice.create(value)
            .then(invoice => res.json(invoice))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    findOne(req, res) {
        const { id } = req.params;
        Invoice.findByIdAndRemove(id)
            .then(invoice => {
                if (!invoice) {
                    return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not delete any invoice' });
                }
                return res.json(invoice);
            })
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    update(req, res) {
        const { id } = req.params;
        const schema = Joi.object().keys({
            item: Joi.string().optional(),
            date: Joi.date().optional(),
            due: Joi.date().optional(),
            qty: Joi.number()
                .integer()
                .optional(),
            tax: Joi.number().optional(),
            rate: Joi.number().optional(),
        });

        const { error, value } = Joi.validate(req.body, schema);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }

        Invoice.findByIdAndUpdate({ _id: id }, value, { new: true })
            .then(invoice => res.json(invoice))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    }
}