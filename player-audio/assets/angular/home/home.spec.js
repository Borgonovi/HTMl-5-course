'use strict';

describe('HomeController', function() {
	beforeEach(module('player-audio'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('test $scope properties', function() {
		it('viewName should be "Home"', function() {
			var $scope = {};
			$controller('HomeController', { $scope: $scope });
			expect($scope.viewName).to.equal('Home');
		});
	});
});
