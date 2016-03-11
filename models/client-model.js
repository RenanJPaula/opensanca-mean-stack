
var mongoose = require('mongoose')
  , schema = new mongoose.Schema({
      name: { type: String, required: true, trim: true }
    , age: { type: Number, default: 18 }
    })
  , Client = mongoose.model('Client', schema);


module.exports.findAllClients = function(params) {
  return new Promise(function(resolve, reject) {
    var _query = {};
    if(params && params.name) {
      _query.name = new RegExp(params.name);
    }
    console.log(_query);
    Client.find(_query, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });

  });
};

module.exports.findOneClient = function(id) {
  return new Promise(function(resolve, reject) {
    var _query = { _id: id };
    Client.findOne(_query, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports.insertClient = function(client) {
  return new Promise(function(resolve, reject) {
    new Client(client).save(function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data._id);
      }
    });
  });
};

module.exports.updateClient = function(client) {
  return new Promise(function(resolve, reject) {
    var _query = { _id: client._id }
      , _mod = client;

    Client.update(_query, _mod, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports.removeClient = function(id) {
  return new Promise(function(resolve, reject) {
    var _query = { _id: id };

    Client.remove(_query, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
