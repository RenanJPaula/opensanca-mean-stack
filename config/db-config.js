
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/opensanca');

var db = mongoose.connection;

db.on('connected', function () {
  console.log('MongoDB connected.');
}).on('open', function () {
  console.log('MongoDB open.');
}).on('disconnected', function () {
  console.log('MongoDB disconnected.');
}).on('error', function (err) {
  console.log('MongoDB error: ' + err);
});

process.on('SIGINT', function () {
  db.close(function () {
    console.log('MongoDB disconnected through app termination');
    process.exit(0);
  });
});

module.exports = db;
