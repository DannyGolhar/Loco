const bodyParser = require('body-parser');
const express = require('express');
var app = express();
var routes = require('./routes');

app.set('port',8090);
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
app.use('/', routes);

/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports={app}