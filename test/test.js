const request = require('supertest');

const {app} = require('../server');

// test for add transaction in transaction list
describe('PUT /transactionservice/transaction/:transaction_id', function () {
    let transactionData = {
        type: "cars",
        amount: 8000,
        "parent_id": 10
    }
    it('respond with 200 status code', function (done) {
        request(app)
            .put('/transactionservice/transaction/11')
            .send(transactionData)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});


// test to get transaction details by transaction id
describe('GET /transactionservice/transaction/:transaction_id', function () {
    it('respond with respond with 200 status code', function (done) {
        request(app)
            .get('/transactionservice/transaction/11')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});


// test to get list of transaction ids by type
describe('GET /transactionservice/types/cars', function () {
    it('respond with json with list of transaction ids having type cars ', function (done) {
        request(app)
            .get('/transactionservice/types/cars')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });
});


// test to get sum of transaction amount which having same parent_id
describe('GET /transactionservice/sum/:transaction_id', function () {
    it('respond with respond with json object of sum of transaction amount which having same parent_id as passed transaction id', function (done) {
        request(app)
            .get('/transactionservice/sum/10')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});