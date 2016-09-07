'use strict';

// Criando serviços RESTFul para o modelo pedidos
app.factory('CepServico', ['$resource', function ($resource){
    return $resource('/cep/:cep_code', {}, {
    });
}]);

// Controller para o tamanho da pizza
app.controller('Pizza', ['$scope', '$http', 'SaborServico', '$window', 'PizzaService', 'AcompanhamentoServico', 'PedidoServico', 'CepServico',
    function ($scope, $http, service, $window, PizzaService, AcompanhamentoServico, PedidoServico, CepServico){

        // Serviço para Read
        service.query(function (data) {
        $scope.sabores = data;
        }, _handleError);

        AcompanhamentoServico.query(function (data) {
            $scope.acompanhamentos = data;
        }, _handleError);


        // Colocando tamanho da PIzza
        $scope.pequena = function () {
            $scope.tamanhoEscolhido = PizzaService.SetTamanhoP();
        }

        $scope.media = function () {
            $scope.tamanhoEscolhido = PizzaService.SetTamanhoM();
        }

        $scope.grande = function () {
            $scope.tamanhoEscolhido = PizzaService.SetTamanhoG();
        }

        // Declarando variáveis necessárias para funcões seguintes
        var cont = 0;
        var saborId = [];
        var precoPizza = [];
        $scope.saborEscolhido = [];
        $scope.precoPedido = 0;
        $scope.disable = [];

        // Função utilizada para adicionar o sabor escolhido e deixa-lo visível para o usuário
        $scope.addSabor = function (sabor, P, M, G, id) {

            $scope.saborEscolhido[cont] = sabor;
            saborId[cont] = id;

            // Comando para desabilitar o botão do sabor após este ser selecionado
            $scope.disable[id] = true;

                    if ($scope.tamanhoEscolhido === "P") {
                            precoPizza[cont] = P;
                        if ($scope.precoPedido < P) {
                            $scope.precoPedido = precoPizza[cont];
                        };
                    };

                     if ($scope.tamanhoEscolhido === "M") {
                            precoPizza[cont] = M;
                        if ($scope.precoPedido < M) {
                            $scope.precoPedido = precoPizza[cont];
                        };
                    };

                    if ($scope.tamanhoEscolhido === "G") {
                            precoPizza[cont] = G;
                        if ($scope.precoPedido < G) {
                            $scope.precoPedido = precoPizza[cont];
                        };
                    };
            cont += 1;
        }

        // Função para remover o sabor dos sabores escolhidos e habilitar novamente o botão para seleciona-lo
        $scope.removeSabor = function () {
            cont -= 1;
            $scope.saborEscolhido[cont] = "";
            $scope.disable[saborId[cont]] = false;
            if (cont === 0) {
                $scope.precoPedido = 0;
            } else {
                if ($scope.precoPedido === precoPizza[cont]) {
                    $scope.precoPedido = precoPizza[cont - 1];
                };
            }
        }

        var i = 0;
        var acompanhamentoId = [];
        var precoAcompanhamento = [];
        $scope.acompanhamentoEscolhido = [];
        $scope.disableA = [];

        // Função utilizada para adicionar o acompanhamento escolhido e deixa-lo visível para o usuário
        $scope.addAcompanhamento = function (acompanhamento, preco, id) {

            $scope.acompanhamentoEscolhido[i] = acompanhamento;
            acompanhamentoId[i] = id;
            precoAcompanhamento[i] = preco
            $scope.precoPedido += precoAcompanhamento[i];
            i += 1;

            // Comando para desabilitar o botão do sabor após este ser selecionado
            $scope.disableA[id] = true;
        }

        $scope.removeAcompanhamento = function () {
            i -= 1;
            $scope.acompanhamentoEscolhido[i] = "";
            $scope.precoPedido -= precoAcompanhamento[i];
            precoAcompanhamento[i] = 0;
            $scope.disableA[acompanhamentoId[i]] = false;
        }

        $scope.finalizarPedido = function (rua, bairro, cep, telefone, pagamento) {
            //alert(endereco + " " + cep + " " + telefone + " " + pagamento);
            cont = 0;
            //alert($scope.saborEscolhido[cont]);
            var sabor1 = $scope.saborEscolhido[cont];
            var sabor2 = $scope.saborEscolhido[cont+1];

                    $scope.data = new Date();
                        // Serviço para Create
                        PedidoServico.save({
                            endereco: {
                                rua: rua,
                                cep: cep,
                                bairro: bairro
                                },
                            telefone: telefone,
                            pizzas: [{
                                tamanho: $scope.tamanhoEscolhido,
                                sabores: [
                                    {sabor: sabor1},
                                    {sabor: sabor2}
                                ],
                                especificacoes: ""
                            }],
                            acompanhamento: $scope.acompanhamentoEscolhido,
                            preco: $scope.precoPedido,
                            data: $scope.data,
                            forma_pagamento: pagamento,
                            status: 'Enviado'
                        }, function () {
                        }, _handleError);

            //$window.location.href = "http://localhost:3000/rastrear";

        }

        $scope.buscarEndereco = function (cep) {

            $scope.endereco = "";

            $http.get('/http://apps.widenet.com.br/busca-cep/api/cep/' + cep + '.json')
            .success(function (data){

                $scope.endereco = data;

            });
        }

        // Função Yaaaaaannnnnnn
        $scope.Gaia= function () {
            $scope.saborEscolhido = "";
            $scope.preco = 0;
        }

        /*$scope.load = function() {
            $scope.disable = true;
            $timeout(function() { $scope.loading = false; }, 1000);
          }*/



        /*$scope.checkboxModel = {
           nome : nome
         };*/

        //$scope.sabor = checkboxModel.nome;

}]);

/*<button ng-click="addSabor(sabor.nome, sabor.precoP, sabor.precoM, sabor.precoG)" ng-disabled="sabor.nome">
                    <p>Ingredientes: <span ng-bind="sabor.ingredientes"></span></p>
                    <p>Preços:
                    Pequena: <span ng-bind="sabor.precoP"></span>
                    Media: <span ng-bind="sabor.precoM"></span>
                    Grande: <span ng-bind="sabor.precoG"></span></p>
                </button>
*/