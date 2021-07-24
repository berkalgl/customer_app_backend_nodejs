const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');

router
    .route('/list')
    .get(customerController.getCustomers);

router
    .route('/create')
    .post(customerController.createCustomer);

router
    .route('/get/:id')
    .get(customerController.getCustomerById);

router
    .route('/update/:id')
    .patch(customerController.updateCustomer);

module.exports = router;