angular
	.module('atividade')
	.controller('ListController', ListController);

ListController.$inject = ['$scope'];

function ListController($scope) {
	$scope.drinks = [
		'Cerverja',
		'Vodka',
		'Whisky'
	];
}