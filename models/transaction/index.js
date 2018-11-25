const sumBy = require('lodash/sumBy');
const filter = require('lodash/filter');
const find = require('lodash/find');

let transactions = []; // contains objects like { “amount”:double,“type”:string,“parent_id”:long, transaction_id: double } 

module.exports.addTransactions = function(transaction) {
    return transactions.push(transaction);
} 

module.exports.getTransactions = function() {
    return transactions;
} 

module.exports.getTransactionById = function(id) {
    return filter(transactions, {transaction_id: id}); // Filter transaction by transaction id
} 
module.exports.getTransactionsByType = function(type) {
    return filter(transactions, {type: type}); // Filter transaction by transaction type
} 

module.exports.getSumOfTransactionsByParentId = function(id) {
    let transaction = find(transactions, ['transaction_id', String(id)]);
    let filteredTransactions = filter(transactions, {parent_id: Number(id)}); // filter transactions by parent id
    if(filteredTransactions.length>0) {
        return transaction.amount + sumBy(filteredTransactions,'amount'); // calculate sum of amount if transactions exists for parent id.
    } else {
        return transaction.amount;
    }
} 
