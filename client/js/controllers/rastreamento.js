'use strict';

app.controller('Rastreador', ['$scope', '$routeParams', 'PedidoServico',
    function ($scope, $routeParams, PedidoServico) {

        $scope.rastrear = function (rastreador) {

            PedidoServico.get({
                pedidoId: rastreador
            }, function (data, headers) {
                $scope.pedido = data;
            }, _handleError);

        };
}]);