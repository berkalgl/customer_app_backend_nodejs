const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const customerRouter = require('./routes/customerRoutes');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Routes
app.use('/api/v1/customers', customerRouter);

module.exports = app;