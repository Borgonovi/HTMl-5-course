'use strict';

angular
  .module('player-audio')
  .factory('musicFactory', musicFactory);

 function musicFactory() {
 		return {
 			musics: [
				{artist: 'Elton John', title: 'Nikita'},
				{artist: 'A-HA', title: 'Stay on These Roads'}
			],
			playlists: [
				{title: 'Pop'},
				{title: 'Rock'}
			]
		};
 }

