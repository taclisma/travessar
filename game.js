var gameSettings = {
	vidas: 3,
	areaGanhar: 100,
	playerSpeed: 48,
	lanes: [100, 200, 300, 400, 500],
	lanes2: [150, 250, 350, 450]
}

// isso pode ir p/ scene load
function enemyRndPos(){
	let randomY = Phaser.Math.RND.pick(gameSettings.lanes);
	return randomY;
}
function enemyRndPosR(){
	let randomY = Phaser.Math.RND.pick(gameSettings.lanes2);
	return randomY;
}
var config = {
	width: 600,
	height: 600,
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
