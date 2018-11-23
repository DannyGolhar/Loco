const express = require('express');
const router = express.Router();
const transactionCtrl = require('./transactionController');

router.put('/transaction/:transaction_id', transactionCtrl.addTransaction);

router.get('/transaction/:transaction_id', transactionCtrl.getTransactionById);

router.get('/types/:type', transactionCtrl.getTransactionsByType);

router.get('/sum/:transaction_id', transactionCtrl.getTransactionSumById);

module.exports = router;