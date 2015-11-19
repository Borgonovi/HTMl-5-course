'use strict';
angular
  .module('atividade-modules')
  .controller('HomeController', HomeController);

function HomeController ($scope) {
  $scope.viewName = 'Home';
  console.log('running HomeController');
}
