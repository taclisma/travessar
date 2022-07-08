class End extends Phaser.Scene{
    constructor(){
        super("End");
    }

    create(){
        this.bg = this.add.tileSprite(0,0, config.width, config.height, "bg");
        this.bg.setOrigin(0,0);

        this.fim = this.add.image(config.width/2, config.height/2, "telaFim");

    }

    update(){
        this.bg.tilePositionY -= 0.5;
    }

}
