///########variaveis 
var gameSettings = {
	vidas: 3,
	areaGanhar: 100,
	playerSpeed: 38,
	lanes: [154, (154+40*2), (154+38*4),(154+38*6) ],//, 200, 300, 400, 500],
	lanes2: [(154+40), (154+38*3), (154+38*5)]//[150, 250, 350, 450]
}

function enemyRndPos(){
	let randomY = Phaser.Math.RND.pick(gameSettings.lanes);
	return randomY;
}
function enemyRndPosR(){
	let randomY = Phaser.Math.RND.pick(gameSettings.lanes2);
	return randomY;
}
var config = {
	width: 512,
	height: 512,
	backgroundColor: 0x000000,
	scene: [Boot, Load, Menu, LvlOne, End],
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
