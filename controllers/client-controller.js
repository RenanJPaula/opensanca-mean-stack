
var ctrl = {}
  , Client = require('../models/client-model');

ctrl.getAllClients = function(req, res) {
  Client.findAllClients(req.query)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
};

ctrl.findOneClient = function(req, res) {
  Client.findOneClient(req.params.id)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
};

ctrl.insertClient = function(req, res) {
  Client.insertClient(req.body)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
};

ctrl.updateClient = function(req, res) {
  var _client = req.body;
  _client._id = req.params.id;

  Client.updateClient(_client)
    .then(function(data) {
      res.sendStatus(200);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
};

ctrl.removeClient = function(req, res) {
  Client.removeClient(req.params.id)
    .then(function(data) {
      res.sendStatus(200);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

module.exports = ctrl;
