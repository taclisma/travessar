class Load extends Phaser.Scene{
    constructor(){
        super("preLoad");
    }

    ///////######## carrega imagens e spritesheets
    preload(){
        /////####### imagens de inicio e fim
        this.load.image("mapa", "assets/mapa.png")
        this.load.image("bgfim", "assets/fim_bg.png");
        this.load.image("telaFim", "assets/fim01.png");
        this.load.image("bg","assets/bg.png");

        /////#######spritesheets
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

    //#########inicia cena de menu
    create(){
        this.scene.start("mainMenu");
    }
}
