const pick = require('lodash/pick');
const {addTransactions, getTransactionById, getTransactionsByType, getSumOfTransactionsByParentId} = require('../../models/transaction');

// add transaction by transaction id
module.exports.addTransaction = function(req, res){
    const {amount,type,parent_id} = pick(req.body, ['amount', 'type', 'parent_id']);
    let transaction_id = req.params.transaction_id;
    if(getTransactionById(transaction_id).length> 0) { // check if transaction id exist or not
        res.status(500).send('Transanction Id already exist. Please use other one.'); // throw error if transaction id exist
    } else {
        addTransactions({amount,type,parent_id,transaction_id}); // Add transaction to records
        res.status(200).send();
    }
};

// Get transaction by transaction id
module.exports.getTransactionById = function(req, res){
    res.status(200).send(getTransactionById(req.params.transaction_id));
};

// Get transaction by transaction type
module.exports.getTransactionsByType = function(req, res){
    let transactions = getTransactionsByType(req.params.type).map(transaction => transaction.transaction_id);
    res.status(200).send(transactions);
};

// Get sum transaction amount by transaction parent id
module.exports.getTransactionSumById = function(req, res){
    let sum = getSumOfTransactionsByParentId(Number(req.params.transaction_id));
    res.status(200).send({sum});
};