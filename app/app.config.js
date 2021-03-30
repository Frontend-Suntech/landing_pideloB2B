'use strict';

angular.
  module('landingApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/inicio', {
          template: '<init-page></init-page>'
        }).
        when('/comercios', {
          template: '<shops-page></shops-page>'
        }).
        when('/proveedores', {
          template: '<providers-page></providers-page>'
        }).
        when('/cobertura', {
          template: '<coverage-page></coverage-page>'
        }).
        otherwise('/inicio');
    }
  ]);

angular.
  module('landingApp').
  config(['$locationProvider',
    function config($locationProvider) {
      $locationProvider.hashPrefix('');
    }
  ]);
