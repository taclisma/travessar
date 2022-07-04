class LvlOne extends Phaser.Scene{
    constructor(){
        super("playLvlOne");
    }

    
    create(){
    /////########### inimigos
        this.carro = this.add.sprite(config.width, config.height, "carrito");
        this.anims.create({
            key: "carrito_roxo_anim",
            frames: this.anims.generateFrameNumbers("carrito"),
            frameRate: 5,
            repeat: -1
        });
        this.carro.play("carrito_roxo_anim");

        this.carro2 = this.add.sprite(config.width, config.height, "carrito2");
        this.anims.create({
            key: "carrito_vemeio_anim",
            frames: this.anims.generateFrameNumbers("carrito2"),
            frameRate: 5,
            repeat: -1
        });
        this.carro2.play("carrito_vemeio_anim");

        this.carro3 = this.add.image(config.width, config.height, "carro");
        this.carro4 = this.add.image(config.width, config.height, "carro");
       
        this.carro5 = this.add.sprite(0, config.height, "carro");
        this.carro6 = this.add.sprite(0, config.height, "carro");
        this.carro7 = this.add.sprite(0, config.height, "carro");

        this.enemies = this.physics.add.group();
        this.enemies.add(this.carro);
        this.enemies.add(this.carro2);
        this.enemies.add(this.carro3);
        this.enemies.add(this.carro4);
        
        this.enemiesR = this.physics.add.group();
        this.enemiesR.add(this.carro5);
        this.enemiesR.add(this.carro6);
        this.enemiesR.add(this.carro7);
    /////########### fim inimigos
        this.player = this.physics.add.image(config.width/2, config.height - 16, "player");
        this.player.setOrigin(0.5,1);

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

        this.physics.add.overlap([this.enemies, this.enemiesR], this.player, function(enemies, player){
            console.log("alo");
            this.player.disableBody(false,true);
            this.time.addEvent({
                delay: 1000,
                callback: this.resetPlayer(),
                callbackScope: this,
                loop: false
            });
        }, null, this);
        this.vidas = 3;

        this.displayVidas  = this.add.text(20,10, `VIDAS 3`, {fill: "yellow"});;
        
    }
    
    update(){
        this.moveCarro(this.carro, 1);
        this.moveCarro(this.carro2, 4);
        this.moveCarro(this.carro3, 5);
        this.moveCarro(this.carro4, 2);

        this.moveCarroR(this.carro5, 1);
        this.moveCarroR(this.carro6, 4);
        this.moveCarroR(this.carro7, 5);
        //this.moveCarroR(this.carro4, 2);
        this.movePlayerManager();
    }

    //funçao p fazer o obj andar
    moveCarro(carro, vel){
        carro.x += vel;
        
        if(carro.x > config.width){
            this.resetCarroPos(carro); 
        }
    }

    moveCarroR(carro, vel){
        carro.x -= vel;
        
        if(carro.x < 0){
            this.resetCarroPosR(carro); 
        }
    }

    resetCarroPos(carro){
        carro.x = 0;
        //aqui usar um array de posiçoes pre definidas ao inves de random
       // let randomY = Phaser.Math.RND.pick(gameSettings.lanes);
        carro.y = enemyRndPos();
    }

    resetCarroPosR(carro){
        carro.x = config.width;
        //aqui usar um array de posiçoes pre definidas ao inves de random
       // let randomY = Phaser.Math.RND.pick(gameSettings.lanes);
        carro.y = enemyRndPosR();
    }

    resetPlayer(){
        if(this.vidas <= 1) this.scene.start("mainMenu"); // scena game over
        else{
            this.vidas -= 1;
            this.displayVidas.text = "VIDAS " + this.vidas;
            this.player.enableBody(true, config.width/2, config.height - 16, true, true);
        }
    }

    movePlayerManager(){
        if(this.player.y <= gameSettings.areaGanhar){         
        this.scene.start("end"); /// scena de ganhar
        }
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
    
