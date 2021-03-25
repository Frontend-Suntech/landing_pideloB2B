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
          template: '<navigation-menu></navigation-menu>'
        }).
        when('/shops', {
          template: '<navigation-menu></navigation-menu>'
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
