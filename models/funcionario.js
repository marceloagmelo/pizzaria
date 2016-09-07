'use strict';

// Chamando dependências
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando Schema
var FuncionarioSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

// Exportando Schema
module.exports = mongoose.model('Funcionario', FuncionarioSchema);