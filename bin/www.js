
var http = require('http')
  , app = require('../app')
  , server = http.createServer(app);

server.listen(3000, function() {
  console.log('Executando na porta 3000');
});
