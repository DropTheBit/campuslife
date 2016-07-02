/**
 * Created by ekfue on 2016-06-29.
 */
var MyGame = MyGame || {};

MyGame.Play = function(){};

MyGame.Play.prototype = {
    init: function(){
    },
    create: function() {
        that = this;
        this.map = this.game.add.tilemap('sample');
        this.map.addTilesetImage('Roguelike','mapImage');

        this.groundLayer = this.map.createLayer('Ground');
        this.groundoverLayer = this.map.createLayer('Ground overlay');
        this.objectsLayer = this.map.createLayer('Objects');
        this.doorroofLayer = this.map.createLayer('Doors/windows/roof');

        this.groundLayer.scale = {x:2, y:2};
        this.groundoverLayer.scale = {x:2, y:2};
        this.objectsLayer.scale = {x:2, y:2};
        this.doorroofLayer.scale = {x:2, y:2};
        this.groundLayer.resizeWorld();

        //this.map.setCollisionBetween(0, 1000);  충돌처리 부분 해결 해야함
        //this.map.setCollisionBetween(1, 100, true, 'Doors/windows/roof');

        this.player = new MyGame.Charactor(this.game, 'Me');
        MyGame.myCharactor = this.player;

        this.game.physics.arcade.enable(this.player);
        this.game.camera.follow(this.player.mainSprite);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.cursors.runKey = this.game.input.keyboard.addKey(MyGame.settings.keyboard.runKey);

        this.game.input.keyboard.addCallbacks(null, null, this.onKeyUpCallback);
    },
    update: function () {
        //this.game.physics.arcade.collide(this.player.mainSprite, this.objectsLayer); 충돌처리부분 해결해야함
        //this.game.physics.arcade.collide(this.player.mainSprite, this.doorroofLayer, this.collisionHandler,null,this);

        this.player.stopVelocity();

        if(this.cursors.up.isDown) {
            this.cursors.runKey.isDown? this.player.runUp() : this.player.walkUp();
        } else if (this.cursors.down.isDown) {
            this.cursors.runKey.isDown? this.player.runDown() : this.player.walkDown();
        }

        if (this.cursors.left.isDown) {
            this.cursors.runKey.isDown? this.player.runLeft() : this.player.walkLeft();
        } else if(this.cursors.right.isDown) {
            this.cursors.runKey.isDown? this.player.runRight() : this.player.walkRight();
        }
    },
    onKeyUpCallback: function (event) {
        var keyCode = event.which;

        if (keyCode === Phaser.Keyboard.UP ||
            keyCode === Phaser.Keyboard.DOWN ||
            keyCode === Phaser.Keyboard.LEFT ||
            keyCode === Phaser.Keyboard.RIGHT) {
            that.player.stopMovement();
        }

    }
};