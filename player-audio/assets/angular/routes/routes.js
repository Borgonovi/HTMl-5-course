'use strict';

angular
  .module('player-audio')
  .config(routes);

function routes($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('player', {
      url: '/player',
      templateUrl: 'templates/player.html',
    });
}
