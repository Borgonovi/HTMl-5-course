'use strict';

angular
	.module('player-audio')
	.service('HomeService', HomeService);

function HomeService($resource)	{
		return {
				repositories: $resource()
		};
}
