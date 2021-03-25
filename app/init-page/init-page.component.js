'use strict';

angular.
  module('initPage').
  component('initPage', {
    templateUrl: 'init-page/init-page.template.html',
    controller: function initController($scope) {
      this.Categorias = [
        {
          name  : 'Abarrotes'
        },
        {
          name  : 'Accesorios',
        },
        {
          name  : 'Aguas y gaseosas',
        },
        {
          name  : 'Alimentos empaquetados',
        },
        {
          name  : 'Carnes y mariscos',
        },
        {
          name  : 'Cervezas',
        },
        {
          name  : 'Congelados',
        },
        {
          name  : 'Cigarros',
        },
        {
          name  : 'Cuidado personal',
        },
        {
          name  : 'Desechables y papelería',
        },
        {
          name  : 'Dulces y confitería',
        },
        {
          name  : 'Embutidos',
        },
        {
          name  : 'Ferretería',
        },
        {
          name  : 'Gourmet',
        },
        {
          name  : 'Jugos y Refrescos'
        },
      ];

      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

      if(vw < 400){
        $scope.cantidad = 9;
      }else{
        $scope.cantidad = 15;
      }

      console.log(vw);

    }
  });