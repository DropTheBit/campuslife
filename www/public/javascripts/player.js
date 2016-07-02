/**
 * Created by ekfue on 2016-06-29.
 */
var MyGame = MyGame || {};

MyGame.settings = {
    player: {
        walkSpeed: 150,
        runSpeed: 300
    },
    keyboard:{
        runKey: Phaser.Keyboard.SHIFT
    }
};

MyGame.Charactor = function (game,name,initX,initY,color){
    this.name = name || 'player name';

    initX = initX || 84;
    initY = initY || 48;

    this.mainSprite = game.add.sprite(initX,initY,'player',1);
    //this.setColor('random');

    this.mainSprite.anchor.set(0.5,0.5);
    this.mainSprite.scale.set(3);

    this.mainSprite.animations.add('left',  [4, 5, 6, 7], 10, true);
    this.mainSprite.animations.add('right', [0, 1, 2, 3], 10, true);
    this.mainSprite.animations.add('up', [12, 13, 14, 15], 10, true);
    this.mainSprite.animations.add('down', [8, 9, 10, 11], 10, true);

    game.physics.enable(this.mainSprite, Phaser.Physics.ARCADE);

    this.charactorName = game.add.text(0,-10,this.name,{ font: '10px Arial', fill: '#444444', align: 'center' });
    this.charactorName.anchor.setTo(0.5);

    this.mainSprite.body.collideWorldBounds = true;
    this.mainSprite.body.setSize(10, 20, 0, 0);


    this.mainSprite.addChild(this.charactorName);

    return this;
}

MyGame.Charactor.prototype.setColor = function(tintName){
    var tints = {
        'pink' : 0xf000f0,
        'turquoise' : 0x00ffff,
        'green' : 0x00ff00,
        'orange' : 0xff7e3d,
    }, tintsArray = ['pink','turquoise','green','orange'];


    if (tints[tintName]) {
        this.mainSprite.tint = tints[tintName];

    } else if (tintName === 'random') {
        tintName = tintsArray[Math.floor(Math.random() * tintsArray.length)];
        this.mainSprite.tint = tints[tintName];
    } else {
        return;
    }

    this.mainSpriteColor = tintName;

}

MyGame.Charactor.prototype.walkUp = function () {
    this.mainSprite.body.velocity.y -= MyGame.settings.player.walkSpeed;
    this.playAnimation('up');
    this.update('up');
}

MyGame.Charactor.prototype.walkDown = function () {
    this.mainSprite.body.velocity.y += MyGame.settings.player.walkSpeed;
    this.playAnimation('down');
    this.update('down');
}

MyGame.Charactor.prototype.walkLeft = function () {
    this.mainSprite.body.velocity.x -= MyGame.settings.player.walkSpeed;
    this.playAnimation('left');
    this.update('left');
}

MyGame.Charactor.prototype.walkRight = function () {
    this.mainSprite.body.velocity.x += MyGame.settings.player.walkSpeed;
    this.playAnimation('right');
    this.update('right');
}

MyGame.Charactor.prototype.runUp = function () {
    this.mainSprite.body.velocity.y -= MyGame.settings.player.runSpeed;
    this.playAnimation('up', 20);
    this.update('up');
}

MyGame.Charactor.prototype.runDown = function () {
    this.mainSprite.body.velocity.y += MyGame.settings.player.runSpeed;
    this.playAnimation('down', 20);
    this.update('down');
}

MyGame.Charactor.prototype.runLeft = function () {
    this.mainSprite.body.velocity.x -= MyGame.settings.player.runSpeed;
    this.playAnimation('left', 20);
    this.update('left');
}

MyGame.Charactor.prototype.runRight = function () {
    this.mainSprite.body.velocity.x += MyGame.settings.player.runSpeed;
    this.playAnimation('right', 20);
    this.update('right');
}

MyGame.Charactor.prototype.stopVelocity = function () {
    this.mainSprite.body.velocity.y = 0;
    this.mainSprite.body.velocity.x = 0;
}

MyGame.Charactor.prototype.playAnimation = function (animationName) {
    this.mainSprite.play(animationName);
}

MyGame.Charactor.prototype.stopAnimations = function () {
    this.mainSprite.animations.stop();
}

MyGame.Charactor.prototype.stopMovement = function () {
    this.stopAnimations();
    this.update();
}

MyGame.Charactor.prototype.setX = function (x) {
    this.mainSprite.x = x;
}

MyGame.Charactor.prototype.setY = function (y) {
    this.mainSprite.y = y;
}

MyGame.Charactor.prototype.setName = function (name) {
    this.name = name;
    //this.mainSpriteName.text = name;
}

MyGame.Charactor.prototype.update = function (animationPlaying) {

    var keys = {
        x: this.mainSprite.position.x,
        y: this.mainSprite.position.y,
        animationPlaying : animationPlaying || null,
        playerColor : this.mainSpriteColor || null//,
        //playerName : this.name || 'Player name'
    };

    //MyGame.eurecaServer.handleKeys(keys);
}

MyGame.Charactor.prototype.kill = function () {
    this.mainSprite.kill();
}