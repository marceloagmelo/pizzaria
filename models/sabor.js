'use strict';

// Chamando dependências
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando Schema
var SaborSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    precoP: {
        type: Number,
        required: true
    },
    precoM: {
        type: Number,
        required: true
    },
    precoG: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
    });

// Exportando Schema
module.exports = mongoose.model('Sabor', SaborSchema);