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

}]);

app.controller('SaborCtrl', ['$scope', '$routeParams', 'SaborServico', '$window',
    function ($scope, $routeParams, service, $window){

        // Serviço para Read
        service.get({
            saborId: $routeParams.saborId
        }, function (data, headers) {
            $scope.sabor = data;
        }, _handleError);

}]);