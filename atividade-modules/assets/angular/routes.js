'use strict';

angular
  .module('atividade-modules')
  .config(routes);

function routes($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'AboutController'
    });
}
