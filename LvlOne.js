class LvlOne extends Phaser.Scene{
    constructor(){
        super("playLvlOne");
    }
    
    create(){
        this.carro = this.add.sprite(config.width, config.height, "carrito");
        this.anims.create({
            key: "carrito_roxo_anim",
            frames: this.anims.generateFrameNumbers("carrito"),
            frameRate: 5,
            repeat: -1
        });
        this.carro.play("carrito_roxo_anim");

        this.carro2 = this.physics.add.image(config.width, config.height, "carro");
        this.carro3 = this.physics.add.image(config.width, config.height, "carro");
        this.carro4 = this.physics.add.image(config.width, config.height, "carro");
       
        this.enemies = this.physics.add.group();
        this.enemies.add(this.carro);
        this.enemies.add(this.carro2);
        this.enemies.add(this.carro3);
        this.enemies.add(this.carro4);
    
        this.player = this.physics.add.image(config.width/2, config.height - 16, "player");
        this.player.setOrigin(0.5,1);

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

        this.physics.add.overlap(this.enemies, this.player, function(enemies, player){
            console.log("alo");
            this.scene.restart();
        }, null, this);
    }
    
    update(){
        this.moveCarro(this.carro, 3);
        this.moveCarro(this.carro2, 4);
        this.moveCarro(this.carro3, 5);
        this.moveCarro(this.carro4, 2);

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
       // let randomY = Phaser.Math.RND.pick(gameSettings.lanes);
        carro.y = enemyRndPos();
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
        } 
    }
}
    
