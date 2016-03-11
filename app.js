var express = require('express')
  , db = require('./config/db-config')
  , bodyParser = require('body-parser')
  , app = express()
  , routes = {
      client: require('./routes/client-route')
    };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', routes.client);

module.exports = app;
