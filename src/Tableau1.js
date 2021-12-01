class Tableau1 extends Phaser.Scene {

    /**
     * Précharge les assets
     */

    preload(){
        this.load.image('vague','assets/vague.png' )
    }
    getFrames(prefix, length)
        {
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
    loadFrames(prefix,url,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            this.load.image(prefix + i,url+i+'.png')
        }
        return frames;
    }

   constructor() {
       super();
   }
    create() {
        this.boxV=this.add.container(0,0);
        this.boxV2=this.add.container(0,0);
        this.x=300
        this.y=500
        for(let j=0;j<=5;j++) {
            for (let i = 0; i <= 2; i++) {
                this.vague = this.add.sprite(this.x + 750 * i, this.y + 100 * j, "vague")
                this.vague.scale = 0.3

                this.vague2 = this.add.sprite(300 + 750 * i, 550 + 150 * j, "vague")
                this.vague2.scale = 0.3

                }
            }
        this.boxV.tint='#00000'
        let tween = this.tweens.add({
            targets: [this.boxV],
            x: 20,
            y:5,
            duration: 1500,
            ease: 'Linear',
            loop: -1,
            yoyo:true,
        });
        let tween2 = this.tweens.add({
            targets: [this.boxV2],
            x: -20,
            y:-5,
            duration: 1500,
            ease: 'Linear',
            loop: -1,
            yoyo:true,
        });
        this.initKeyboard()
    }

    initKeyboard() {
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

    update() {





    }

}



