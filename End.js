class End extends Phaser.Scene{
    constructor(){
        super("end");
    }

    create(){
        this.add.text(20,30, "voce cruza o vazio assustador e atravessa a rua. por que?", {fill: "yellow"});

    }

}