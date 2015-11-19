'use strict';

angular
  .module('player-audio')
  .controller('HomeController', HomeController);

function HomeController (musicFactory) {
	this.musics = musicFactory.musics;
	this.playlists = musicFactory.playlists;
}
