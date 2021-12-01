let gameConfig = {
    type: Phaser.AUTO,
    width: screen.width*0.9,
    height: screen.height*0.9,
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
