
var scene = new Phaser.Scene("game");
var config = {
    type: Phaser.AUTO,
    width: 1320,
    height: 700,
    backgroundColor: '#4488aa',
    type: Phaser.AUTO,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,

    },
    // scene: { 
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
    // OLD WAY OF MANAGING SCENES
};



var game = new Phaser.Game(config);

//var thisIsAGoodPlaceToPutPublicVariables;

scene.preload = function() {
    this.load.spritesheet('moses', 'assets/mosprite.png', {frameWidth: 29, framHeight: 19});
}

scene.create = function() {
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    
    this.add.image(0, 0, 'moses', '__BASE').setOrigin(0, 0);
    
    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('moses', { frames: [ 0, 1 ] }),
        frameRate: 1,
        repeat: -1

    });

    const moAni = this.physics.add.sprite(600, 370);
    moAni.setScale(5)
    this.input.on('pointerdown', function () {
        moAni.play('idle');
    });

}

scene.update = function() {

}
game.scene.add("game", scene);
game.scene.start('game');
console.log("scene loaded")
