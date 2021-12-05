let gameConfig = {
    type: Phaser.AUTO,
    width: 1728,
    height: 972,
    backgroundColor: '#5772F8',
    audio: {
        disableWebAudio: true
    },
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug:true
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
