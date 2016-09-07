'use strict';

// Criando serviços RESTFul para o modelo pedidos
app.factory('PedidoServico', ['$resource', function ($resource){
    return $resource('/listpedidos/:pedidoId', {}, {
        update: {
            method: 'PUT'
        }
    });
}]);

// Controllers dos Pedidos
app.controller('PedidosCtrl', ['$scope', 'PedidoServico', '$window',
    function ($scope, service, $window) {
        // Serviço para Read
        service.query(function (data) {
            $scope.pedidos = data;
        }, _handleError);

        $scope.deletar = function () {

            // Função para Delete
            service.delete({}, _handleError);

            $window.location.href= "http://localhost:3000/"
        };
}]);

app.controller('PedidoCtrl', ['$scope', '$routeParams', 'PedidoServico', '$window',
    function ($scope, $routeParams, service, $window){
        // Serviço para Read
        service.get({
            pedidoId: $routeParams.pedidoId
        }, function (data, headers) {
            $scope.pedido = data;
        }, _handleError);

        $scope.atualizar = function () {

        // Serviço para Update
        service.update({
            pedidoId: $routeParams.pedidoId}, {
                preco: $scope.preco
            }, function () {
            }, _handleError);

        // Redirecionando após as operações
        $window.location.href="http://localhost:3000/pedidos"

    };

    $scope.deletar = function () {

        //Serviço para Delete
        service.delete({
            pedidoId: $routeParams.pedidoId
        }, _handleError);

        // Redirecionando após a operação
        $window.location.href="http://localhost:3000/pedidos"

    };
}]);

app.controller('CreatePedCtrl', ['$scope', 'PedidoServico', '$window',
    function ($scope, service, $window){

        $scope.criar = function () {

            $scope.data = new Date();
            // Serviço para Create
            service.save({
                endereco: {
                    rua: $scope.rua,
                    cep: $scope.cep,
                    bairro: $scope.bairro
                    },
                telefone: $scope.telefone,
                pizzas: [{
                    tamanho: $scope.tamanho,
                    sabores: [
                        {sabor1: $scope.sabor1},
                        {sabor2: $scope.sabor2}
                    ],
                    especificacoes: $scope.especificacoes
                }],
                acompanhamento: $scope.acompanhamento,
                preco: $scope.preco,
                data: $scope.data,
                forma_pagamento: $scope.forma_pagamento
            }, function () {
            }, _handleError);

            // Redirecionando após o serviço
            $window.location.href="http://localhost:3000/pedidos"
        };
}]);