class Tableau1 extends Phaser.Scene {


    preload() {
        this.load.image('vague', 'assets/vague.png')
        this.load.image('mer', 'assets/mer.jpg')
        this.load.image('ship', 'assets/ship.png')
        this.load.image('ball', 'assets/boulet.png')
        this.load.image('cloud1', 'assets/nuage1.png')
        this.load.image('cloud2', 'assets/nuage2.png')
    }
    createEnemy(){
        this.shipE = this.physics.add.sprite(Phaser.Math.Between(0, 1728), Phaser.Math.Between(720, 900), 'ship')
        this.shipE.setDepth(this.shipE.y+50)
        this.shipE.setGravityY(0)
        this.shipE.setSize(50,10)
        this.GshipE.push(this.shipE)
        console.log(this.GshipE)
    }
    createBall(){
        this.ball=this.physics.add.sprite(this.ship.x,this.ship.y+100,'ball')
        this.ball.setDepth(10000)
        this.ball.setGravityY(1000)
       this.Gball.push(this.ball)
        console.log(this.Gball)
    }

    create() {
        this.Gball=[]
        this.GshipE=[]
        this.physics.add.collider(this.Gball, this.GshipE)



        let xrand=Phaser.Math.Between(0, 1728)
        let xrand2=Phaser.Math.Between(0, 1728)
        let yrand=Phaser.Math.Between(670, 950)
        let yrand2=Phaser.Math.Between(670, 950)
        this.couler=0
        this.cloud=this.add.image(300,100,'cloud1')
        this.cloud.setDepth(2)
        this.cloud2=this.add.image(1300,100,'cloud2')
        this.cloud2.setDepth(2)
        this.cloud3=this.add.image(1300,300,'cloud1')
        this.cloud3.setDepth(2)
        this.ship = this.physics.add.sprite(300, 510, 'ship')
        this.ship.setDepth(600)
        this.mer = this.add.image(screen.height, screen.height - 400, 'mer')
        this.mer.setDepth(1)
        this.vague = this.add.tileSprite(300 , 570,this.mer.width*4,131, "vague")
        this.vague.setDepth(this.vague.y)
        this.vague2 = this.add.tileSprite(250 , 600,this.mer.width*4,131, "vague")
        this.vague2.setDepth(this.vague2.y)
        this.vague3 = this.add.tileSprite(300 , 620,this.mer.width*4,131,"vague")
        this.vague3.setDepth(this.vague3.y)
        this.vague4 = this.add.tileSprite(250 , 650,this.mer.width*4,131,"vague")
        this.vague4.setDepth(this.vague4.y)
        this.vague5 = this.add.tileSprite(300 , 670,this.mer.width*4,131, "vague")
        this.vague5.setDepth(this.vague5.y)
        this.vague6 = this.add.tileSprite(250 , 700,this.mer.width*4,131, "vague")
        this.vague6.setDepth(this.vague6.y)
        this.vague7 = this.add.tileSprite(300 , 720,this.mer.width*4,131, "vague")
        this.vague7.setDepth(this.vague7.y)
        this.vague8 = this.add.tileSprite(250 , 750,this.mer.width*4,131, "vague")
        this.vague8.setDepth(this.vague8.y)
        this.vague9 = this.add.tileSprite(300 , 770,this.mer.width*4,131, "vague")
        this.vague9.setDepth(this.vague9.y)
        this.vague10 = this.add.tileSprite(250 , 800,this.mer.width*4,131, "vague")
        this.vague10.setDepth(this.vague10.y)
        this.vague11 = this.add.tileSprite(300 , 820,this.mer.width*4,131, "vague")
        this.vague11.setDepth(this.vague11.y)
        this.vague12 = this.add.tileSprite(250 , 850,this.mer.width*4,131, "vague")
        this.vague12.setDepth(this.vague12.y)
        this.vague13 = this.add.tileSprite(300 , 870,this.mer.width*4,131, "vague")
        this.vague13.setDepth(this.vague13.y)
        this.vague14 = this.add.tileSprite(250 , 900,this.mer.width*4,131, "vague")
        this.vague14.setDepth(this.vague14.y)
        this.vague15 = this.add.tileSprite(300 , 950,this.mer.width*4,131, "vague")
        this.vague15.setDepth(this.vague15.y)
        let tween = this.tweens.add({
            targets: [this.vague,this.vague3,this.vague5,this.vague7,this.vague9,this.vague11,this.vague13,this.vague15],
            scaleY:0.7,
            x:310,
            ease: 'Exponential ease-in/out',
            duration: 400,
            delay: 50,
            repeat: -1,
            yoyo: true,
        })
        let tween2 = this.tweens.add({
            targets: [this.vague2,this.vague4,this.vague6,this.vague8,this.vague10,this.vague12,this.vague14],
            scaleY:0.8,
            x:240,
            ease: 'OutElastic',
            duration: 450,
            delay: 50,
            repeat: -1,
            yoyo: true,
        })
let tween3 = this.tweens.add({
            targets: [this.ship],
            y:520,
            ease: 'Linear',
            duration: 450,
            delay: 50,
            repeat: -1,
            yoyo: true,
        })




        this.initKeyboard()
        this.speed=0;





}
    initKeyboard(){
        let me=this
            this.input.keyboard.on('keydown', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                        me.speed=10
                        me.ship.angle-=5
                        me.ship.flipX=false
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.ship.angle+=5
                        me.ship.flipX=true
                        me.speed=-10
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.N:

                        break;
                    case Phaser.Input.Keyboard.KeyCodes.P:
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.S:
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.G:
                        break;

                    case Phaser.Input.Keyboard.KeyCodes.Q:
                        break;
                }
            });
            this.input.keyboard.on('keyup', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                        me.speed=0
                        me.ship.angle=0
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.speed=0
                        me.ship.angle=0
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.SPACE:
                        me.createBall()
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.A:
                        me.createEnemy();
                        console.log('ennemycreated')
                        break;
                }
            });
        }

        update(){
            if (-60>this.ship.angle<60){
                this.couler=0
            }
            if(this.ship.angle>60){
                this.couler=1
            }
            if(this.ship.angle<-60){
                this.couler=1
            }
            if(this.couler==1) {
                let tweencouler = this.tweens.add({
                    targets: [this.ship],
                    y: this.ship.y + 150,
                    ease: 'Linear',
                    duration: 150,
                    delay: 0,
                    repeat: 1,
                    yoyo: false,
                })
            }
            if(this.ship.x+this.ship.width<0){
                this.ship.x=1728
            }
            if(this.ship.x>1728){
                this.ship.x=0
            }

        this.ship.x+=this.speed




        }
    }




