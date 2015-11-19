'use strict';

angular
	.module('example')
	.controller('TestController', TestController);

TestController.$inject = ['$scope'];

function TestController($scope) {
	$scope.name = 'Felipe';
	$scope.sayName = function() {
		alert('Felipe');
	}

	$scope.courses = [
		'HTML5',
		'CSS3',
		'JavaScript'
	];

	$scope.addCourses = function() {
		if($scope.course){
			$scope.courses.push($scope.course);
			$scope.course = undefined;
		}
		
	}
}