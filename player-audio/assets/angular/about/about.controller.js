'use strict';

angular
  .module('player-audio')
  .controller('AboutController', AboutController);

function AboutController ($scope) {
  $scope.viewName = 'About';
}
