'use strict';

app.controller('Tamanho', ['$scope', 'PizzaService', '$window',
  function ($scope, PizzaService, $window){

   $scope.pequena = function () {
            PizzaService.SetTamanhoP();
            $window.location.href ="http://localhost:3000/sabores"
        }

        $scope.media = function () {
            PizzaService.SetTamanhoM();
            $window.location.href ="http://localhost:3000/sabores"
        }

        $scope.grande = function () {
            PizzaService.SetTamanhoG();
            $window.location.href ="http://localhost:3000/sabores"
        }

}]);