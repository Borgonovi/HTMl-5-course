'use strict';

angular
	.module('player-audio')
	.config(materialConfig);


function materialConfig($mdThemingProvider){
	$mdThemingProvider
		.theme('default')
		.primaryPalette('red')
		.accentPalette('grey');
}
