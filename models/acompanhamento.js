'use strict';

// Chamando dependências
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando Schema
var AcompanhamentoSchema = new Schema({
    produto: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

// Exportando Schema
module.exports = mongoose.model('Acompanhamento', AcompanhamentoSchema);