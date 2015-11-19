'use strict';

angular
  .module('atividade-modules')
  .controller('AboutController', AboutController);

function AboutController ($scope) {
  $scope.viewName = 'About';
  console.log('running AboutController');
}
