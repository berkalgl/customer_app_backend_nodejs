const Customer = require('../models/customer');
const ApiHelper = require('../utils/apiHelper');

exports.getCustomers = async (req, res, next) => {
    try{
        const list = new ApiHelper(Customer.find(),req).sort().paginate();

        const docs = await list.query;

        res.status(200).json({length: docs.length, customerList:docs});

    }catch(error){
        next(error);
    }
};

exports.createCustomer = async (req, res, next) => {
    try{
        const doc = await Customer.create(req.body);
        res.status(201).json(doc);
    }catch(error){
        next(error);
    }    
};