class Boot extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    create(){
        this.add.text(20,30, "booting");
        this.scene.start("preLoad");
    }
}