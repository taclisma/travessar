var config = {
	width: 640,
	height: 640,
	backgroundColor: 0x000000,
	scene: [Boot, Load, Menu, LvlOne]
}

window.onload = function (){
	var game = new Phaser.Game(config);
	//game.state.add('Boot', bootGame);
	//game.state.start('Boot')
}