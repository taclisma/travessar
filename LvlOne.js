class LvlOne extends Phaser.Scene{
    constructor(){
        super("playLvlOne");
    }

    
    create(){
    ///#### background
        this.mapa = this.add.tileSprite(0,0, config.width, config.height, "mapa");
        this.mapa.setOrigin(0,0);
        this.mapa.setTileScale(4, 4);

    /////########### inimigos
        this.carro = this.add.sprite(config.width, config.height, "carrito");
        this.carro2 = this.add.sprite(config.width, config.height, "carrito2");
        this.carro3 = this.add.sprite(config.width, config.height, "carrito2");
        this.carro4 = this.add.sprite(config.width, config.height, "carrito3");
        
        // ################## animações de sprite
        this.anims.create({
            key: "carrito_roxo_anim",
            frames: this.anims.generateFrameNumbers("carrito"),
            frameRate: 5,
            repeat: -1
        });
        
        this.anims.create({
            key: "carrito_vemeio_anim",
            frames: this.anims.generateFrameNumbers("carrito2"),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "carrito_verde_anim",
            frames: this.anims.generateFrameNumbers("carrito3"),
            frameRate: 5,
            repeat: -1
        });
        
        this.carro.play("carrito_roxo_anim");
        this.carro2.play("carrito_vemeio_anim");
        this.carro3.play("carrito_vemeio_anim");
        this.carro4.play("carrito_verde_anim");
       
        this.carro5 = this.add.sprite(0, config.height, "carrito4");
        this.carro6 = this.add.sprite(0, config.height, "carrito5");
        this.carro7 = this.add.sprite(0, config.height, "carrito6");

        this.anims.create({
            key: "carrito_roxo_animR",
            frames: this.anims.generateFrameNumbers("carrito4"),
            frameRate: 5,
            repeat: -1
        });
        
        this.anims.create({
            key: "carrito_vemeio_animR",
            frames: this.anims.generateFrameNumbers("carrito5"),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "carrito_verde_animR",
            frames: this.anims.generateFrameNumbers("carrito6"),
            frameRate: 5,
            repeat: -1
        });

        this.carro5.play("carrito_roxo_animR");
        this.carro6.play("carrito_vemeio_animR");
        this.carro7.play("carrito_verde_animR");

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

        //////####### jogador
        this.player = this.physics.add.sprite(config.width/2, config.height - 38, "player");
        this.player.setOrigin(0.5,1);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
            ////####### animaçao jogador
            this.anims.create({
                key:"pato_para",
                frames: this.anims.generateFrameNumbers("player", { start: 0, end: 1 }),
                frameRate: 2,
                repeat: -1
            });
            this.anims.create({
                key:"pato_morte",
                frames: this.anims.generateFrameNumbers("player", { start: 4, end: 6 }),
                frameRate: 2,
                repeat: -1
            });
        this.player.play("pato_para");

        this.physics.add.overlap([this.enemies, this.enemiesR], this.player, function(enemies, player){
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
            this.player.enableBody(true, config.width/2, config.height - 38, true, true);
        }
    }

    //######### movimento do jogador
    movePlayerManager(){
        this.checkGanhar();
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

    checkGanhar(){
        if(this.player.y <= gameSettings.areaGanhar){
            this.scene.start("End"); /// cena de ganhar
        }
    }

}
    
