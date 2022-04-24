
var scene = new Phaser.Scene("game");
var config = {
    type: Phaser.AUTO,
    width: 1320,
    height: 700,
    backgroundColor: '#3e3e42',
    type: Phaser.AUTO,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
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
var moses;

scene.preload = function () {
    this.load.spritesheet('moses', 'assets/mosprite.png', { frameWidth: 32, frameHeight: 25 });
}

scene.create = function () {
    cursors = this.input.keyboard.createCursorKeys();
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    moses = this.physics.add.image(0, 0, 'moses', '__BASE').setOrigin(0, 0);


    floor = this.add.rectangle(screenCenterX, 595, 8000, 20, 0x8b5a2b);
    this.physics.add.existing(floor);
    //floor.body.enable = false;
    floor.body.setAllowGravity = false;
    floor.body.setCollideWorldBounds(true)





    moAni = this.physics.add.sprite(600, 370);
    moAni.body.setCollideWorldBounds(true);
    moAni.setScale(4)
    this.physics.add.collider(moAni, floor);
    moAni.body.setSize(10, 20, true);
    moAni.body.offset.y = 4.3;
    moAni.setBounce(0.2);

    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('moses', { frames: [0, 1] }),
        frameRate: 1,
        repeat: -1

    });
    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('moses', { frames: [2, 3] }),
        frameRate: 1,
        repeat: -1

    });

    var moState;
    if (moState == "idle") {
        moAni.play('idle');
    }

    this.input.on('pointerdown', function () {
        moAni.play('idle');
    });

}
let upKey = event.Keycode; 
scene.update = function () {

    if (cursors.upKey.isDown)
{
    moAni.play("walk");
    moAni.setVelocityY(-300);
    console.log("W")
}
else if (cursors.right.isDown)
{
    
}
else
{
  
}

if (cursors.up.isDown && moAni.body.touching.down)
{
    player.setVelocityY(-330);
}
   
}
game.scene.add("game", scene);
game.scene.start('game');
console.log("scene loaded");


