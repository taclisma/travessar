class Load extends Phaser.Scene{
    constructor(){
        super("preLoad");
    }

    create(){
        this.add.text(20,30, "loading ..", {fill: "yellow"});
    }

    preload(){
        this.load.image("bg","assets/bg.png");
        this.load.image("carro", "assets/carro.png");
        this.load.image("player", "assets/player.png");
        this.load.image("bt", "assets/botao.png");
    }
    create(){
        this.scene.start("mainMenu");
    }
}