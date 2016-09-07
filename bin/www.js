'use strict';

// Chamando dependências
var debug = require('debug')('example-server');
var app = require('../');

// Colocando port padrão
app.set('port', process.env.PORT || 8080);

// Iniciando servidor
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});