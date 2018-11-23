const sumBy = require('lodash/sumBy');
const filter = require('lodash/filter');

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
    let filteredTransactions = filter(transactions, {parent_id: id}); // filter transactions by parent id
    return filteredTransactions.length > 0 ? sumBy(filteredTransactions,'amount') : 0; // calculate sum of amount if transactions exists for parent id.
} 
