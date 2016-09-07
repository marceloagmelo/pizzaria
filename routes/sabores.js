'use strict';

// Chamando dependências
var express = require('express');
var mongoose = require('mongoose');
var Sabor = mongoose.model('Sabor');
var router = express.Router();

// Criando routes get
router.get('/listsabores', function (req, res, next) {

    // Função para buscar sabores do BD
    Sabor.find().sort('nome').exec(function (error, results) {
        if (error) {
            return next(error);
        }

        // Respondendo com dados válidos
        res.json(results);
    });
});

// Criando routes get 1
router.get('/listsabores/:saborId', function (req, res, next) {

    // Função para buscar somente 1 sabor do BD
    Sabor.findOne({
        _id: req.params.saborId
    }, function (error, results) {
        if (error) {
            return next(error);
        }

        // Caso não encontre nenhum registro, envie um 404
        if (!results) {
            res.sendStatus(404);
        }

        // Respondendo com dados válidos
        res.json(results);
    });
});

// Route para atualizar sabor
router.put('/listsabores/:saborId', function (req, res, next) {

    Sabor.update({
        _id: req.params.saborId
    }, req.body, function (err, numberAffected, response) {
        if (err) {
            return next(err);
        }

        // Enviando resposta ao usuário
        res.sendStatus(200);
    });
});

// Route para deletar todos os sabores
router.delete('/listsabores', function (req, res, next) {

    Sabor.remove({},
        function (err) {
            if (err) {
                return next(err);
            }
        });
});

// Route para deletar 1 sabor
router.delete('/listsabores/:saborId', function (req, res, next) {

    Sabor.remove({
        _id: req.params.saborId
    }, function (err) {
        if (err) {
            return next(err);
        }
    });
});

// Route para inserir sabor
router.post('/listsabores', function (req, res, next) {

    Sabor.create(req.body, function (err) {
        if (err) {
            return next(err);
        }

        // Enviando resposta ao usuário
        res.sendStatus(200);
    });
});

// Exportando módulos
module.exports = router;