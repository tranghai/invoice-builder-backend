const express = require('express');
const clientController = require('./client.controller');
const router = express.Router();

router.route('/')
        .get(clientController.findAll)
        .post(clientController.create);

router.route('/:id')
        .get(clientController.findOne)
        .put(clientController.update)
        .delete(clientController.delete);
        
module.exports = router;