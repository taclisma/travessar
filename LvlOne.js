class LvlOne extends Phaser.Scene{
    constructor(){
        super("playLvlOne");
    }
    
    create(){
        this.carro = this.add.image(config.width/2, config.height/2, "carro");
        //this.carro.setOrigin(0,0);
        
        this.carro2 = this.add.image(config.width/2, config.height/2, "carro");

        this.player = this.physics.add.image(config.width/2, config.height - 16, "player");
        this.player.setOrigin(0.5,1);

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
    }
    
    update(){
        this.moveCarro(this.carro, 3)
        this.moveCarro(this.carro2, 4)

        this.movePlayerManager();
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

    movePlayerManager(){
        // movimento com delay de 250ms
        if(this.input.keyboard.checkDown(this.cursorKeys.up, 250)){
            this.player.setY((this.player.y)-(gameSettings.playerSpeed));

        }else if(this.input.keyboard.checkDown(this.cursorKeys.down, 250)){
            this.player.setY((this.player.y)+(gameSettings.playerSpeed));

        }else if(this.input.keyboard.checkDown(this.cursorKeys.left, 250)){
            this.player.setX((this.player.x)-(gameSettings.playerSpeed));
            
        }else if(this.input.keyboard.checkDown(this.cursorKeys.right, 250)){
            this.player.setX((this.player.x)+(gameSettings.playerSpeed));   
        } //else {
        //     this.player.setVelocityX(0);
        //     this.player.setVelocityY(0);
        // }
    }
}
    
