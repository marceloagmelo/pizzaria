'use strict';

// Chamando dependências
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Chamando conexão com o banco de dados e routes
require('./bin/connection');
var funcionarios = require('./routes/funcionarios');
var sabores = require('./routes/sabores');
var pedidos = require('./routes/pedidos');
var acompanhamentos = require('./routes/acompanhamentos');

// Inicializando variável app
var app = express();

// Definindo qual o ícone
app.use(favicon(__dirname + '/client/favicon.ico'));

// Chamando um código específico da aplicação
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

// Utilizando rotas
app.use(funcionarios);
app.use(sabores);
app.use(pedidos);
app.use(acompanhamentos);
//app.use(cep);

// Route para Funcionários
app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

// Redirecionando qualquer route para o index
app.get('/', function (req, res){
    res.sendFile(__dirname + '/client/index.html');
});

// Pegando 404 e passando para as funções que cuida dos erros
app.use(function (req, res, next) {
    var err = new Error('Não encontrado');

    err.status = 404;
    next(err);
    //res.sendFile(__dirname + '/client/home.html');
});

// Erros

// Erros no servidor de desenvolvimento
// Irá mostrar stacktraces
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// Erro no servidor de produção
// Não irá mostrar os stacktraces ao usuário
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
});

// Exportando app
module.exports = app;