'use strict';

// Chamando dependências
var express = require('express');
var mongoose = require('mongoose');
var Pedido = mongoose.model('Pedido');
var router = express.Router();

// Criando route get
router.get('/listpedidos/', function (req, res, next) {
    // Função para encontrar e organizar pedidos
    Pedido.find().sort('id').exec(function (error, results) {
        if (error) {
            return next(error);
        }

        // Respondendo com dados válidos
        res.json(results);
    });
});

// Criando route get 1
router.get('/listpedidos/:pedidoId', function (req, res, next) {
    // Função para encontrar somente 1 pedido
    Pedido.findOne({
        _id: req.params.pedidoId
    }, function (error, results) {
        if (error) {
            return next(error);
        }

        // Respondendo com dados válidos
        res.json(results)
    });
});

// Criando route Update
router.put('/listpedidos/:pedidoId', function (req, res, next) {

    // Função para atualizar dados
    Pedido.update({
        _id: req.params.pedidoId
    }, req.body, function (err, numberAffected, response) {
        if (err) {
            return next(err);
        }

        // Enviando resposta ao usuário
        res.sendStatus(200);
    });
});

// Criando route para Delete
router.delete('/listpedidos', function (req, res, next) {

    // Função para deletar todos os pedidos
    Pedido.remove({}, function (err) {
        if (err) {
            return next(err);
        }
    });
});

// Criando route para Delete 1
router.delete('/listpedidos/:pedidoId', function (req, res, next) {

    // Função para excluir pedido
    Pedido.remove({
        _id: req.params.pedidoId
    }, function (err) {
        if (err) {
            return next(err);
        }
    });
});

// Criando route para Create
router.post('/listpedidos', function (req, res, next) {

    Pedido.create(req.body, function (err) {
        if (err) {
            return next(err);
        }

        // Respondendo com dados válidos
        res.sendStatus(200);
    });
});

// Exportando módulos
module.exports = router;