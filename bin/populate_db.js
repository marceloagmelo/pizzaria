'use strict';

// Chamando dependências
var async = require('async');
var mongoose = require('mongoose');
require(process.cwd() + '/bin/connection');
var Funcionario = mongoose.model('Funcionario');
var Sabor = mongoose.model('Sabor');
var Pedido = mongoose.model('Pedido');
var Acompanhamento = mongoose.model('Acompanhamento');

// Definindo dados a serem adicionados
var data = {
    funcionarios: [
        {
            login: 'Okabe Rintarou',
            senha: 'Hououin Kyouma'
        },
        {
            login: 'Shina Mayuri',
            senha: 'Tutturu, Mayushii des'
        }
    ],
    sabores: [
        {
            nome: 'Mussarela',
            ingredientes: 'Queijo mussarela, cebolas e azeitona',
            precoP: 24.50,
            precoM: 32.20,
            precoG: 36.60,
            id: 1

        },
        {
            nome: 'Calabresa',
            ingredientes: 'Queijo mussarela, malabresa, cebolas e azeitona',
            precoP: 26.50,
            precoM: 34.20,
            precoG: 38.60,
            id: 2
        }
    ],
    acompanhamentos: [
        {
            produto: 'Coca 2L',
            preco: 6.60,
            id: 1
        },
        {
            produto: 'Guaraná 2L',
            preco: 5.60,
            id: 2
        }
    ],
    pedidos: [
        {
            endereco: {
                rua: "Rua A",
                cep: "49050-823",
                bairro: "Bairro B"
            },
            telefone: '9192-3467',
            pizzas: [{
                tamanho: 'G',
                sabores: [
                    {sabor: 'Mussarela'},
                    {sabor: 'Calabresa'}
                ],
                especificacoes: 'Sem Cebolas'
            },{
                tamanho: 'M',
                sabores: [
                    {sabor: 'Mussarela'}
                ]
            }],
            acompanhamento: 'Coca 2L',
            preco: 35,
            data: '12/07/2015',
            forma_pagamento: 'Dinheiro',
            status: 'Enviado'
        }
    ]
};

// Definindo funções para serem executadas no banco de dados
var deletarFuncionarios = function(callback) {
    console.info('Deletando funcionarios');
    Funcionario.remove({}, function (error, response) {
        if (error) {
            console.error('Erro ao deletar funcionarios: ' + error);
        };

        console.info('Funcionarios deletados');
        callback();
    });
};

var addFuncionarios = function (callback) {
    console.info('Adicionando Funcionário');
    Funcionario.create(data.funcionarios, function (error) {
        if (error) {
            console.error('Erro : ' + error);
        }

        console.info('Funcionarios adicionados');
        callback();
    });
};

var deletarSabores = function (callback) {
    console.info('Deletando sabores');
    Sabor.remove({}, function (error, response) {
        if (error) {
            console.error('Erro ao deletar sabores: ' + error);
        }

        console.info('Sabores deletados');
        callback();
    });
};

var addSabores = function (callback) {
    console.info('Adicionando sabores');
    Sabor.create(data.sabores, function (error) {
        if (error) {
            console.error('Erro: ' + error);
        }
        /*
            function (error, sabor1) {
        if (error) {
            console.error('Erro: ' + error);
        }
        else {
            data.sabor_id = sabor1._id;
        }*/

        console.info('Sabores adicionados');
        callback();
    });
};

var deletarAcompanhamentos = function (callback) {
    console.info('Deletando acompanhamentos');
    Acompanhamento.remove({}, function (error, response) {
        if (error) {
            console.error('Erro ao deletar acompanhamentos: ' + error);
        }

        console.info('Acompanhamentos deletados');
        callback();
    });
};

var addAcompanhamentos = function (callback) {
    console.info('Adicionando acompanhamentos');
    Acompanhamento.create(data.acompanhamentos, function (error) {
        if (error) {
            console.error('Erro: ' + error);
        }

        console.info('Acompanhamentos adicionados');
        callback();
    });
};

var deletarPedidos = function (callback) {
    console.info('Deletando pedidos');
    Pedido.remove({}, function (error, response) {
        if (error) {
            console.error('Erro ao deletar pedidos: ' + error);
        }

        console.info('Pedidos deletados');
        callback();
    });
};

var addPedidos = function (callback) {
    console.info('Adicionando pedidos');
    Pedido.create(data.pedidos, function (error) {
        if (error) {
            console.error('Erro: ' + error);
        }

        console.info('Pedidos adicionados');
        callback();
    });
};

/* Comando necessário para que as funções sejam
    executadas de forma assíncrona */
async.series([
    deletarFuncionarios,
    deletarSabores,
    deletarAcompanhamentos,
    deletarPedidos,
    addFuncionarios,
    addSabores,
    addAcompanhamentos,
    addPedidos
], function (error, results) {
    if (error) {
        console.error('Erro: ' + error);
    }

    mongoose.connection.close();
    console.log('Fim!');
});