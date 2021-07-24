const Customer = require('../models/customer');
const ApiHelper = require('../utils/apiHelper');

exports.getCustomers = async (req, res, next) => {
    try{
        const list = new ApiHelper(Customer.find(),req).sort().paginate();

        const customers = await list.query;

        res.status(200).json({length: customers.length, customerList:customers});

    }catch(error){
        next(error);
    }
};

exports.createCustomer = async (req, res, next) => {
    try{
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    }catch(error){
        next(error);
    }    
};

exports.getCustomerById = async (req, res, next) => {
    try{
        const customer = await Customer.findById(req.params.id); 

        if(!customer)
            return next(new Error('No customer found!'));

        res.status(200).json(customer);
    }catch(error){
        next(error);
    }
};

exports.updateCustomer = async (req, res, next) => {
    try{
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        
        if(!customer)
            return next(new Error('No customer found!'));
            
        res.status(200).json(customer);
    }catch(error){
        next(error);
    }    
};