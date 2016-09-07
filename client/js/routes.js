'use strict';

// Configurando Routes
app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
    })
    .when('/rastrear', {
        templateUrl: 'rastrear.html',
        controller: 'Rastreador'
    })
    .when('/local', {
        templateUrl: 'local.html'
    })
    .when('/contato', {
        templateUrl: 'contato.html'
    })
    .when('/sobre', {
        templateUrl: 'sobre.html'
    })
    .when('/pizza', {
        templateUrl: 'pizza.html',
        controller: 'Pizza'
    })
    .when('/func', {
        templateUrl: 'home.html'
    })
    .when('/func/funcionarios', {
        templateUrl: 'funcionarios.html',
        controller: 'FuncionariosCtrl'
    })
    .when('/func/funcionarios/:funcionarioLogin', {
        templateUrl: 'funcionario.html',
        controller: 'FuncionarioCtrl'
    })
    .when('/func/createfun', {
        templateUrl: 'createfun.html',
        controller: 'CreateFunCtrl'
    })
    .when('/func/sabores1', {
        templateUrl: 'sabores.html',
        controller: 'SaboresCtrl'
    })
    .when('/func/sabores/:saborId', {
        templateUrl: 'sabor.html',
        controller: 'SaborCtrl'
    })
    .when('/func/createsab', {
        templateUrl: 'createsab.html',
        controller: 'CreateSabCtrl'
    })
    .when('/func/pedidos', {
        templateUrl: 'pedidos.html',
        controller: 'PedidosCtrl'
    })
    .when('/func/pedidos/:pedidoId', {
        templateUrl: 'pedido.html',
        controller: 'PedidoCtrl'
    })
    .when('/func/createped', {
        templateUrl: 'createped.html',
        controller: 'CreatePedCtrl'
    });
    //.otherwise({
    //    redirectTo: '/'
    //});

    // Use HTML History API
    $locationProvider.html5Mode(true);
}]);