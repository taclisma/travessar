class Load extends Phaser.Scene{
    constructor(){
        super("preLoad");
    }

    create(){
        this.add.text(20,30, "loading ..", {fill: "yellow"});
        
    }

    preload(){
        this.load.image("bg","assets/bg.png");
        this.load.spritesheet("carrito", "assets/carrito_roxo.png", {
            frameWidth: 32,
            frameHeight: 32 
        });
        this.load.spritesheet("carrito2", "assets/carrito_vemeio.png", {
            frameWidth: 32,
            frameHeight: 32 
        });
        this.load.spritesheet("carrito3", "assets/carrito_verde.png", {
            frameWidth: 32,
            frameHeight: 32 
        });

        //-------
        this.load.spritesheet("carrito4", "assets/carrito_roxor.png", {
            frameWidth: 32,
            frameHeight: 32 
        });
        this.load.spritesheet("carrito5", "assets/carrito_vemeior.png", {
            frameWidth: 32,
            frameHeight: 32 
        });
        this.load.spritesheet("carrito6", "assets/carrito_verder.png", {
            frameWidth: 32,
            frameHeight: 32 
        });
        this.load.spritesheet("player", "assets/pato.png", {
            frameWidth: 32,
            frameHeight: 32 
        });
        this.load.spritesheet("bt", "assets/playbtn.png", {
            frameWidth: 64, frameHeight: 32
        });
        
    }
    create(){
        this.scene.start("mainMenu");
    }
}
