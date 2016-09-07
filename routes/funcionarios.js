'use strict';

// Chamando dependências
var express = require('express');
var mongoose = require('mongoose');
var Funcionario = mongoose.model('Funcionario');
var router = express.Router();

// Criando routes get
router.get('/listfuncionarios', function (req, res, next) {
    // Função para encontrar e organizar funcionários
    Funcionario.find().sort('login').exec(function (error, results) {
        if (error) {
            return next(error);
        }

        // Respondendo com dados válidos
        res.json(results);
    });
});

// Criando routes get 1
router.get('/listfuncionarios/:funcionarioLogin', function (req, res, next) {
    // Função para encontrar somente 1 funcionário
    Funcionario.findOne({
        login: req.params.funcionarioLogin
    }, function (error, results) {
        if (error) {
            return next(error);
        }

        // Caso não encontre um funcionário, envie um 404
        if (!results) {
            res.sendStatus(404);
        }

        // Respondendo com dados válidos
        res.json(results);
    });
});

// Routes para atualizar funcionário
router.put('/listfuncionarios/:funcionarioLogin', function (req, res, next) {

    // Função para atualizar funcionário
    Funcionario.update({
        login: req.params.funcionarioLogin
    }, req.body, function (err, numberAffected, response) {
        if (err) {
            return next(err);
        }

        // Enviando resposta ao usuário
        res.sendStatus(200);
    });
});

// Routes para deletar funcionário
router.delete('/listfuncionarios/:funcionarioLogin', function (req, res, next) {

    // Função para deletar funcionário
    Funcionario.remove({
        login: req.params.funcionarioLogin
    }, function (err) {
        if (err) {
            return next(err);
        }
    });
});

// Routes para inserir funcionário
router.post('/listfuncionarios', function (req, res, next) {

    Funcionario.create(req.body, function (err) {
        if (err) {
            return next(err);
        }

        // Enviando resposta ao usuário
        res.sendStatus(200);
    });
});

// Exportando módulos
module.exports = router;