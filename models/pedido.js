'use strict';

// Chamando dependências
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando Schema
var PedidoSchema = new Schema({
    endereco: {
        rua: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        }
    },
    telefone: {
        type: String,
        required: true
    },
    pizzas: [{
             tamanho: {
                type: String,
                required: true
            },
            sabores: [{
                sabor: {
                    type: String
                }
            }],
            especificacoes: {
                type: String
        }
    }],
    acompanhamento: {
        type: String
    },
    preco: {
        type: Number,
        required: true
    },
    data: {
        type: Date
    },
    forma_pagamento: {
        type: String,
        required: true
    },
    status: {
        type: String,
    }
});

// Exportando Schema
module.exports = mongoose.model('Pedido', PedidoSchema);