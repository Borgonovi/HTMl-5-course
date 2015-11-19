'use strict';

angular
	.module('atividade-routes')
	.config(routes);

function routes($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/404');
	$locationProvider.html5Mode(true);
	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'templates/home.html'
		})
		.state('red',{
			url:'/red',
			templateUrl: 'templates/red.html'
		})

		.state('green',{
			url:'/green',
			templateUrl: 'templates/green.html'
		})

		.state('blue',{
			url:'/blue',
			templateUrl: 'templates/blue.html'
		});
}