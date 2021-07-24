const mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Fullname is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    mobileNum: {
        type: Number,
        required: 'Mobile Number is required'
    },
    city: {
        type: String,
        required: "City is required"
    }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;