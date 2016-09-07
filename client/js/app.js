'use strict';

// Declarando aplicação
var app = angular.module('client', ['ngRoute', 'ngResource']);

app.factory("PizzaService", function() {
    var tamanho = "G";
  return {

    SetTamanhoP: function () {
        tamanho = "P";
        return tamanho;
    },

    SetTamanhoM: function () {
        tamanho = "M";
        return tamanho;
    },

    SetTamanhoG: function () {
        tamanho = "G";
        return tamanho;
    }

    };
});


// Função para cuidar dos erros
function _handleError (response, $window) {
    // Fazer algo aqui, como redirecionar para uma página de erro
    alert('Erro');
    console.log('%c' + response, 'color:red');
}

/*app.controller("MyCtrl", function($scope, UserService) {
   $scope.users = UserService.all();
});

app.controller("AnotherCtrl", function($scope, UserService) {
   $scope.firstUser = UserService.first();
});*/