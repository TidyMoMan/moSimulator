            var scene = new Phaser.Scene("game");
            var config = {
                type: Phaser.AUTO,
                width: 1320,
                height: 700,
                type: Phaser.AUTO,
                parent: 'game',
                physics: {
                    default: 'arcade',
                    arcade: {
                        //gravity: { y: 300 },
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
                //this.load.spritesheet('moses', 'assets/mosprite.png', 38, 48);
            }

            scene.create = function() {
                const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
                const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

               // moses = this.game.add.sprite(15, 30, 'moses');
                //moses.frame = 3;

            }

            scene.update = function() {
                
            }
            
            game.scene.add("game", scene);
            game.scene.start('game');
