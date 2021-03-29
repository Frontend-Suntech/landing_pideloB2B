'use strict';

angular.
  module('landingApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/inicio', {
          template: '<init-page></init-page>'
        }).
        when('/providers', {
          template: '<providers-page></providers-page>'
        }).
        when('/shops', {
          template: '<shops-page></shops-page>'
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
