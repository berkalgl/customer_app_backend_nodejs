const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');

router
    .route('/list')
    .get(customerController.getCustomers);

router
    .route('/create')
    .post(customerController.createCustomer);

module.exports = router;