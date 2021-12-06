let gameConfig = {
    type: Phaser.AUTO,
    width: 1728,
    height: 972,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min: {
            width: 800,
            height: 600
        },
        max: {
            width: 1728,
            height: 972,
        }
    },
    backgroundColor: '#5772F8',
    audio: {
        disableWebAudio: true
    },
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
