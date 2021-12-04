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
        this.mer = this.add.image(screen.height, screen.height - 400, 'mer')

        this.vague = this.add.tileSprite(300 , 470 + 100,this.mer.width*4,436, "vague")
        this.vague.scale = 0.3
        this.vague.scaleY = 0.2
        this.vague2 = this.add.tileSprite(250 , 500 + 100,this.mer.width*4,436, "vague")
        this.vague2.scale = 0.3
        this.vague2.scaleY = 0.2
        this.ship = this.add.sprite(300, 510, 'ship')
        this.ship.scale = 0.2
        this.vague3 = this.add.tileSprite(300 , 470 + 150,this.mer.width*4,436,"vague")
        this.vague3.scale = 0.3
        this.vague3.scaleY = 0.2
        this.vague4 = this.add.tileSprite(250 , 500 + 150,this.mer.width*4,436,"vague")
        this.vague4.scale = 0.3
        this.vague4.scaleY = 0.2
        this.vague5 = this.add.tileSprite(300 , 470 + 200,this.mer.width*4,436, "vague")
        this.vague5.scale = 0.3
        this.vague5.scaleY = 0.2
        this.vague6 = this.add.tileSprite(250 , 500 + 200,this.mer.width*4,436, "vague")
        this.vague6.scale = 0.3
        this.vague6.scaleY = 0.2
        this.vague7 = this.add.tileSprite(300 , 470 + 250,this.mer.width*4,436, "vague")
        this.vague7.scale = 0.3
        this.vague7.scaleY = 0.2
        this.vague8 = this.add.tileSprite(250 , 500 + 250,this.mer.width*4,436, "vague")
        this.vague8.scale = 0.3
        this.vague8.scaleY = 0.2
        this.vague9 = this.add.tileSprite(300 , 470 + 300,this.mer.width*4,436, "vague")
        this.vague9.scale = 0.3
        this.vague9.scaleY = 0.2
        this.vague10 = this.add.tileSprite(250 , 500 + 300,this.mer.width*4,436, "vague")
        this.vague10.scale = 0.3
        this.vague10.scaleY = 0.2
        this.vague11 = this.add.tileSprite(300 , 470 + 350,this.mer.width*4,436, "vague")
        this.vague11.scale = 0.3
        this.vague11.scaleY = 0.2
        this.vague12 = this.add.tileSprite(250 , 500 + 350,this.mer.width*4,436, "vague")
        this.vague12.scale = 0.3
        this.vague12.scaleY = 0.2
        this.vague13 = this.add.tileSprite(300 , 470 + 400,this.mer.width*4,436, "vague")
        this.vague13.scale = 0.3
        this.vague13.scaleY = 0.2
        this.vague14 = this.add.tileSprite(250 , 500 + 400,this.mer.width*4,436, "vague")
        this.vague14.scale = 0.3
        this.vague14.scaleY = 0.2

        this.vague2.setTintFill('#000000')
        let tween = this.tweens.add({
            targets: [this.vague,this.vague3,this.vague5,this.vague7,this.vague9,this.vague11,this.vague13],
            scaleX: 0.30,
            scaleY: 0.3,
            ease: 'Sine.easeInOut',
            duration: 400,
            delay: 50,
            repeat: -1,
            yoyo: true,
        })
        let tween2 = this.tweens.add({
            targets: [this.vague2,this.vague4,this.vague6,this.vague8,this.vague10,this.vague12,this.vague14],
            scaleX: 0.30,
            scaleY: 0.3,
            ease: 'Sine.easeInOut',
            duration: 450,
            delay: 50,
            repeat: -1,
            yoyo: true,
        })

        this.initKeyboard()

    }



        initKeyboard(){
            this.input.keyboard.on('keydown', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                        break;

                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
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
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        break;
                }
            });
        }

        update()
        {
            this.ship.x+=1
            this.ship.y+= Phaser.Math.Between(-1,1)

        }
    }




