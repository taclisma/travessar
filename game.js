///########variaveis 
var gameSettings = {
	vidas: 3,
	areaGanhar: 100,
	playerSpeed: 38,
	lanes: [154, (154+40*2), (154+38*4),(154+38*6) ],
	lanesR: [(154+40), (154+38*3), (154+38*5)]
}
///########funções para escolher estradinha
function enemyRndPos(){
	let randomY = Phaser.Math.RND.pick(gameSettings.lanes);
	return randomY;
}
function enemyRndPosR(){
	let randomY = Phaser.Math.RND.pick(gameSettings.lanesR);
	return randomY;
}

///########config parametros do phaser
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

///##### inicio
window.onload = function (){
	var game = new Phaser.Game(config);
}
