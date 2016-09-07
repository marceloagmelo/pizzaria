'use strict';

// Criando serviços RESTFul para o modelo sabores
app.factory('AcompanhamentoServico', ['$resource', function ($resource){
    return $resource('/listacompanhamentos/:acompanhamentoId', {}, {
        update: {
            method: 'PUT'
        }
    });
}]);