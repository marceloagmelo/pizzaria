'use strict';

// Chamando Dependências
var mongoose = require('mongoose');
//var dbUrl = 'mongodb://teste:teste@172.30.32.231:27017/pizzaria';
var dbUrl = 'mongodb://teste:teste@10.130.11.83:27017/pizzaria';
//var dbUrl = process.env.MONGO_DB

mongoose.connect(dbUrl);

// Fechar a conexão com o Mongoose ao Ctrl^C
process.on('SIGINT', function(){
    mongoose.connection.close(function() {
        console.log('Conexão padrão com o Mongoose encerrada');
        process.exit(0);
    });
});

// Puxando modelos do banco de dados
require('../models/funcionario');
require('../models/pedido');
require('../models/sabor');
require('../models/acompanhamento');
