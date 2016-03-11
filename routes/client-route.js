
var express = require('express')
  , router = express.Router()
  , ctrl = require('../controllers/client-controller');

router.get('/clients', ctrl.getAllClients);
router.get('/client/:id', ctrl.findOneClient);
router.post('/client', ctrl.insertClient);
router.put('/client/:id', ctrl.updateClient);
router.delete('/client/:id', ctrl.removeClient);

module.exports = router;
