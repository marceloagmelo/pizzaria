'use strict';

// Configurando Routes
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/func', {
            templateUrl: '/funcionario/home.html'
        })
        .when('/func/funcionarios', {
            templateUrl: 'funcionario/funcionarios.html',
            controller: 'FuncionariosCtrl'
        })
        .when('/func/funcionarios/:funcionarioLogin', {
            templateUrl: 'funcionario/funcionario.html',
            controller: 'FuncionarioCtrl'
        })
        .when('/func/createfun', {
            templateUrl: 'funcionario/createfun.html',
            controller: 'CreateFunCtrl'
        })
        .when('/func/sabores', {
            templateUrl: 'funcionario/sabores.html',
            controller: 'SaboresCtrl'
        })
        .when('/func/sabores/:saborId', {
            templateUrl: 'funcionario/sabor.html',
            controller: 'SaborCtrl'
        })
        .when('/func/createsab', {
            templateUrl: 'funcionario/createsab.html',
            controller: 'CreateSabCtrl'
        })
        .when('/func/pedidos', {
            templateUrl: 'funcionario/pedidos.html',
            controller: 'PedidosCtrl'
        })
        .when('/func/pedidos/:pedidoId', {
            templateUrl: 'funcionario/pedido.html',
            controller: 'PedidoCtrl'
        })
        .when('/func/createped', {
            templateUrl: 'funcionario/createped.html',
            controller: 'CreatePedCtrl'
        });
        /*.otherwise({
            redirectTo: '/func'
        });*/

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
}]);
