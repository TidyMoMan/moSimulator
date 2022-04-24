
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
    this.load.spritesheet('moses', 'assets/mosprite2.png', { frameWidth: 32, frameHeight: 32 });
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
    moAni.setBounce(0.125);

    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('moses', { frames: [0, 1] }),
        frameRate: 1,
        repeat: -1

    });
    this.anims.create({
        key: 'walkLeft',
        frames: this.anims.generateFrameNumbers('moses', { frames: [2] }),
        frameRate: 1,
        repeat: -1
    });
    this.anims.create({
        key: 'walkRight',
        frames: this.anims.generateFrameNumbers('moses', { frames: [3] }),
        frameRate: 1,
        repeat: -1
    });

    

    this.input.on('pointerdown', function () {
        moAni.play('idle');
    });
    idletimer = this.time.addEvent(
        new Phaser.Time.TimerEvent({
            delay: 3000, callback: () => {
                moAni.play('idle');
                console.log('playing idle animation');
            }, loop: true
        }));

}

scene.update = function () {

    if (cursors.left.isDown)
{
    moAni.play("walkLeft");
    moAni.setVelocityX(-300);
    console.log("A")
}
else if (cursors.right.isDown)
{
    moAni.play("walkRight");
    moAni.setVelocityX(300);
    console.log("D")
}
else
{
    moAni.setVelocityX(0);
}

if (cursors.up.isDown && moAni.body.touching.down)
{
    moAni.setVelocityY(-200);
}
   
}
game.scene.add("game", scene);
game.scene.start('game');
console.log("scene loaded");


