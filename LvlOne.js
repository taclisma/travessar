class LvlOne extends Phaser.Scene{
    constructor(){
        super("playLvlOne");
    }
    
    create(){
        this.carro = this.add.image(config.width/2, config.height/2, "carro");
        //this.carro.setOrigin(0,0);
        
        this.carro2 = this.add.image(config.width/2, config.height/2, "carro");

        this.player = this.add.image(config.width/2, config.height - 16, "player");
        this.player.setOrigin(0.5,1);
    }
    
    update(){
        this.moveCarro(this.carro, 3)
        this.moveCarro(this.carro2, 4)
    }

    //funçao p fazer o obj andar
    moveCarro(carro, vel){
        carro.x += vel;
        if(carro.x > config.width){
            this.resetCarroPos(carro); 
        }
    }

    resetCarroPos(carro){
        carro.x = 0;

        //aqui usar um array de posiçoes pre definidas ao inves de random

        let randomY = Phaser.Math.Between(200, 600);
        carro.y = randomY;
    }

}