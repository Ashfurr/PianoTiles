class Tableau1 extends Phaser.Scene {

    /**
     * Précharge les assets
     */

    preload() {
        this.load.image('vague', 'assets/vague.png')
        this.load.image('mer', 'assets/mer.jpg')
        this.load.image('ship', 'assets/ship.png')
    }

    getFrames(prefix, length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }

    /**
     * Renvoie un tableau d'images
     * @param {string} prefix Préfixe de la clé (key) à générer
     * @param {string} url base d'url pour charger le fichier
     * @param {Number} length combien d'images charger?
     * @returns {*[]}
     */
    loadFrames(prefix, url, length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            this.load.image(prefix + i, url + i + '.png')
        }
        return frames;
    }

    constructor() {
        super();
    }

    create() {
        console.log(screen.width)
        console.log(screen.height)
        let xrand=Phaser.Math.Between(0, 1728)
        let xrand2=Phaser.Math.Between(0, 1728)
        let yrand=Phaser.Math.Between(0, 15)
        let yrand2=Phaser.Math.Between(0, 15)
        this.couler=0
        this.ship = this.physics.add.sprite(300, 510, 'ship')
        this.ship.setDepth(2)
        this.shipE = this.physics.add.sprite(xrand, 650, 'ship')
        this.shipE.setDepth(0)
        this.shipE.setTintFill('#RGB00')
        this.mer = this.add.image(screen.height, screen.height - 400, 'mer')
        this.vague = this.add.tileSprite(300 , 570,this.mer.width*4,131, "vague")
        this.vague.setDepth(1)
        this.vague2 = this.add.tileSprite(250 , 600,this.mer.width*4,131, "vague")
        this.vague2.setDepth(2)
        this.vague3 = this.add.tileSprite(300 , 620,this.mer.width*4,131,"vague")
        this.vague3.setDepth(3)
        this.vague4 = this.add.tileSprite(250 , 650,this.mer.width*4,131,"vague")
        this.vague4.setDepth(4)
        this.vague5 = this.add.tileSprite(300 , 670,this.mer.width*4,131, "vague")
        this.vague5.setDepth(5)
        this.vague6 = this.add.tileSprite(250 , 700,this.mer.width*4,131, "vague")
        this.vague6.setDepth(6)
        this.vague7 = this.add.tileSprite(300 , 720,this.mer.width*4,131, "vague")
        this.vague7.setDepth(7)
        this.vague8 = this.add.tileSprite(250 , 750,this.mer.width*4,131, "vague")
        this.vague8.setDepth(8)
        this.vague9 = this.add.tileSprite(300 , 770,this.mer.width*4,131, "vague")
        this.vague9.setDepth(9)
        this.vague10 = this.add.tileSprite(250 , 800,this.mer.width*4,131, "vague")
        this.vague10.setDepth(10)
        this.shipE2 = this.physics.add.sprite(xrand2, 750, 'ship')
        this.vague11 = this.add.tileSprite(300 , 820,this.mer.width*4,131, "vague")
        this.vague11.setDepth(11)
        this.vague12 = this.add.tileSprite(250 , 850,this.mer.width*4,131, "vague")
        this.vague12.setDepth(12)
        this.vague13 = this.add.tileSprite(300 , 870,this.mer.width*4,131, "vague")
        this.vague13.setDepth(13)
        this.vague14 = this.add.tileSprite(250 , 900,this.mer.width*4,131, "vague")
        this.vague14.setDepth(14)
        this.vague15 = this.add.tileSprite(300 , 950,this.mer.width*4,131, "vague")
        this.vague15.setDepth(15)


        this.vague2.setTintFill('#000000')

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



        this.initKeyboard();
        this.speed=0;
        console.log(this.ship.width)
        console.log(this.ship.height)


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
                    case Phaser.Input.Keyboard.KeyCodes.A:
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
                }
            });
        }

        update()
        {


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
            console.log(this.ship.x+this.ship.width)
        this.ship.x+=this.speed



        }
    }




