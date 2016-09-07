'use strict';

// Chamando dependências
var express = require('express');
var mongoose = require('mongoose');
var Acompanhamento = mongoose.model('Acompanhamento');
var router = express.Router();

// Criando routes get
router.get('/listacompanhamentos', function (req, res, next) {

    // Função para buscar Acompanhamentos do BD
    Acompanhamento.find().sort('produto').exec(function (error, results) {
        if (error) {
            return next(error);
        }

        // Respondendo com dados válidos
        res.json(results);
    });
});

// Criando routes get 1
router.get('/listacompanhamentos/:acompanhamentoId', function (req, res, next) {

    // Função para buscar somente 1 Acompanhamento do BD
    Acompanhamento.findOne({
        _id: req.params.acompanhamentoId
    }, function (error, results) {
        if (error) {
            return next(error);
        }

        // Respondendo com dados válidos
        res.json(results);
    });
});

// Route para atualizar Acompanhamento
router.put('/listacompanhamentos/:acompanhamentoId', function (req, res, next) {

    Acompanhamento.update({
        _id: req.params.acompanhamentoId
    }, req.body, function (err, numberAffected, response) {
        if (err) {
            return next(err);
        }

        // Enviando resposta ao usuário
        res.sendStatus(200);
    });
});

// Route para deletar todos os acompanhamentos
router.delete('/listacompanhamentos', function (req, res, next) {

    Acompanhamento.remove({},
        function (err) {
            if (err) {
                return next(err);
            }
        });
});

// Route para deletar 1 Acompanhamento
router.delete('/listacompanhamentos/:acompanhamentoId', function (req, res, next) {

    Acompanhamento.remove({
        _id: req.params.acompanhamentoId
    }, function (err) {
        if (err) {
            return next(err);
        }
    });
});

// Route para inserir sabor
router.post('/listacompanhamentos', function (req, res, next) {

    Acompanhamento.create(req.body, function (err) {
        if (err) {
            return next(err);
        }

        // Enviando resposta ao usuário
        res.sendStatus(200);
    });
});

// Exportando módulos
module.exports = router;