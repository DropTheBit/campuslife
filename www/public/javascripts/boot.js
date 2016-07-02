/**
 * Created by ekfue on 2016-06-29.
 */

var MyGame = MyGame || {};

MyGame.Boot = function(){};

MyGame.Boot.prototype = {
    init: function(){
        
    },
    preload: function () {
        this.load.onLoadComplete.addOnce(this.onLoadComplete,this);

        this.showLoadingText();
        this.loadAssets();
    },
    onLoadComplete: function () {
        console.log("play");
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.state.start('play');
    },
    loadAssets: function(){
        this.game.load.tilemap('sample', 'jsonmap/sample_map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('mapImage', 'images/spritesheet/roguelikeSheet_transparent.png');
        this.game.load.spritesheet('player', 'images/actor/mervin.png',8,8);
    },
    showLoadingText: function() {
        var loadingText = "Loading...";
        var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, loadingText);

        text.anchor.set(0.5);
        text.align = 'center';

        text.font = 'Arial';
        text.fontWeight = 'bold';
        text.fontSize = 70;
        text.fill = '#ffffff';
    }
};