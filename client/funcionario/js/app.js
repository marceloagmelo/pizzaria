'use strict';

// Declarando aplicação
var app = angular.module('func', ['ngRoute', 'ngResource']);

// Função para cuidar dos erros
function _handleError (response, $window) {
    // Fazer algo aqui, como redirecionar para uma página de erro
    alert('Erro');
    console.log('%c ' + response, 'color:red');
}