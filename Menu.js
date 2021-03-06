class Menu extends Phaser.Scene{
    constructor(){
        super("mainMenu");
    }

    create(){
        this.bg = this.add.tileSprite(0,0, config.width, config.height, "bg");
        this.bg.setOrigin(0,0);
        this.bg.setTileScale(1.28, 1.28);

        
        this.bt = this.add.sprite(config.width/2, config.height/2, "bt");
        this.anims.create({
            key: "playAnim",
            frames: this.anims.generateFrameNumbers("bt"),
            frameRate: 5,
            repeat: -1
        });
        
        this.bt.setInteractive();
        this.bt.play("playAnim");
        this.input.on('gameobjectdown', this.menuPlay, this);
    }

    update(){
        this.bg.tilePositionY -= 0.5;
    }


    menuPlay(){
        this.scene.start("playLvlOne");
    }

}
