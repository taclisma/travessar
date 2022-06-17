var gameSettings = {
	playerSpeed: 200,
}

var config = {
	width: 640,
	height: 640,
	backgroundColor: 0x000000,
	scene: [Boot, Load, Menu, LvlOne],
	pixelArt:true,
	physics: {
		default: "arcade", 
		arcade:{
			debug: false
		}
	}
}

window.onload = function (){
	var game = new Phaser.Game(config);
}
