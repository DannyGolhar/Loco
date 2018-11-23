# Loco

This backend application handles transactions.

### Prerequisites
* Node 8.11.2 ++
* git

### Installing

Instruction to clone the repo and install the dependencies.

```
git clone https://github.com/DannyGolhar/Loco.git
```

To install dependedencies

```
npm install
```

To run the application

```
npm start
```

## Running the tests

To run tests

```
npm test
```

Local test results

* [Test Results](https://raw.githubusercontent.com/DannyGolhar/Loco/65db16301dd95f254f5f91a5a2762a20296d53c0/loco-test.png)

## Postman Collection
* [https://www.getpostman.com/collections/fe99746626644efb307](https://www.getpostman.com/collections/fe99746626644efb3079)


### API Aproach 
``` 
PUT /transactionservice/transaction/:transaction_id
```
* First checked for existing transaction id in saved transaction by 'getTransactionById()' function. If exist then error will thow to user. If there is no transaction id present then transaction details saved in by 'addTransactions()' function
* Note:- 'transactions' array maintained in 'models\transaction\index.js' file.

