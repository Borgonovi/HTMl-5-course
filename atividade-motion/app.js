var $square = $('.square');

$square.on('click', function(){
	$square
		// Piscar com o click
		// .transit({opacity: 0},400)
		// .transit({opacity: 1});

		//Rodar e aumentar com o click 
		.transit({rotate: '45deg', delay:1000},2000)
		.transition({ scale: 2.2 },500)
		.transition({ scale: 1 })
		.transit({rotate: '0deg'});
});