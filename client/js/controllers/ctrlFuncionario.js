'use strict';

// Criando serviços RESTFul para o modelo funcionarios
app.factory('FuncionarioServico', ['$resource', function ($resource){
    return $resource('/listfuncionarios/:funcionarioLogin', {}, {
        update: {
            method: 'PUT'
        }
    });
}]);



// Controllers dos Funcionários
app.controller('FuncionariosCtrl', ['$scope', 'FuncionarioServico',
    function ($scope, service){

        // Serviço para Read
        service.query(function (data, headers) {
            $scope.funcionarios = data;
        }, _handleError);
}]);

app.controller('FuncionarioCtrl', ['$scope', '$routeParams', 'FuncionarioServico', '$window',
    function ($scope, $routeParams, service, $window){

        // Serviço para Read
        service.get({
            funcionarioLogin: $routeParams.funcionarioLogin
        }, function (data, headers) {
            $scope.funcionario = data;
        }, _handleError);

        $scope.atualizar = function () {

            // Serviço para Update ({Condição}, {ValorModificado})
            service.update({
                    funcionarioLogin: $routeParams.funcionarioLogin}, {
                    senha: $scope.senha
                }, function () {
                }, _handleError);

            // Redirecionando após a operação
            $window.location.href="http://localhost:3000/func";
        };

        $scope.deletar = function () {

            // Serviço para Delete
            service.delete({
                funcionarioLogin: $routeParams.funcionarioLogin
            }, _handleError);

            // Redirecionando após a operação
            $window.location.href="http://localhost:3000/func";
        };

}]);

app.controller('CreateFunCtrl', ['$scope', 'FuncionarioServico', '$window',
    function ($scope, service, $window){

        $scope.criar = function () {

            // Serviço para Create
            service.save({
                login: $scope.login,
                senha: $scope.senha
            }, function () {
            }, _handleError);

            $window.location.href="http://localhost:3000/func/funcionarios";
        };
}]);