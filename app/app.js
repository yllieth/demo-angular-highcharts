'use strict';

// Declare app level module which depends on views, and components
angular
  .module('demoApp', [
    'ui.router',
    'mm.foundation'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/highcharts');

    $stateProvider
      .state('highcharts', {
        url: '/highcharts',
        templateUrl: 'modules/highcharts.html',
        controller: 'HighchartsCtrl',
        controllerAs: 'Highcharts'
      })
      .state('highstock', {
        url: '/highstock',
        templateUrl: 'modules/highstock.html',
        controller: 'HighstockCtrl',
        controllerAs: 'Highstock'
      })
      .state('highmaps', {
        url: '/highmaps',
        templateUrl: 'modules/highmaps.html',
        controller: 'HighmapsCtrl',
        controllerAs: 'Highmaps'
      });
  });
