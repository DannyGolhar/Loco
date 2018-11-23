const express = require('express');
const router = express.Router();
const transactionRoutes = require('./modules/transaction');

router.use('/transactionservice', transactionRoutes);
module.exports = router;