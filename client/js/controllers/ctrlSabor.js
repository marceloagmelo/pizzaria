'use strict';

// Criando serviços RESTFul para o modelo sabores
app.factory('SaborServico', ['$resource', function ($resource){
    return $resource('/listsabores/:saborId', {}, {
        update: {
            method: 'PUT'
        }
    });
}]);

// Controllers dos Sabores
app.controller('SaboresCtrl', ['$scope', 'SaborServico', '$window',
    function ($scope, service, $window){

        // Serviço para Read
        service.query(function (data) {
            $scope.sabores = data;
        }, _handleError);

        $scope.deletar = function (callback) {

            // Serviço para Delete
            service.delete({}, _handleError);

            $window.location.href ="http://localhost:3000/"
        };
}]);

app.controller('SaborCtrl', ['$scope', '$routeParams', 'SaborServico', '$window',
    function ($scope, $routeParams, service, $window){

        // Serviço para Read
        service.get({
            saborId: $routeParams.saborId
        }, function (data, headers) {
            $scope.sabor = data;
        }, _handleError);

        $scope.atualizar = function () {

            // Serviço para Update
            service.update({
                saborId: $routeParams.saborId}, {
                nome: $scope.nome
            }, function () {
            }, _handleError);

            // Redirecionando após as operações
            $window.location.href="http://localhost:3000/sabores"
        };

        $scope.deletar = function () {

            // Serviço para Delete
            service.delete({
                saborId: $routeParams.saborId
            }, _handleError);

            // Redirecionando após a operação
            $window.location.href="http://localhost:3000/sabores"
        };
}]);

app.controller('CreateSabCtrl', ['$scope', 'SaborServico', '$window',
    function ($scope, service, $window) {

        $scope.criar = function () {

            // Serviço para Create
            service.save({
                nome: $scope.nome,
                ingredientes: $scope.ingredientes,
                preco: $scope.preco
            }, function () {
            }, _handleError);

            // Redirecionando após o serviço
            $window.location.href= "http://localhost:3000/sabores"
        };
}]);