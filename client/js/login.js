'use strict';

// Declarando aplicação
var app = angular.module('login', ['ngResource']);

// Função para cuidar dos erros
function _handleError (response, $window) {
    // Fazer algo aqui, como redirecionar para uma página de erro
    alert('Erro');
    console.log('%c ' + response, 'color:red');
}

// Criando serviços RESTFul para o modelo funcionarios
app.factory('FuncionarioServico', ['$resource', function ($resource){
    return $resource('/listfuncionarios/:funcionarioLogin', {}, {
        update: {
            method: 'PUT'
        }
    });
}]);

app.controller('check', ['$scope', 'FuncionarioServico',
    function ($scope, service){

    $scope.logar = function () {

        // Serviço para Read
        service.get({
            funcionarioLogin: $scope.loginf
        }, function (data, headers) {
            $scope.funcionario = data;
        }, _handleError);

    };


}]);