/**
 * Created by ekfue on 2016-06-29.
 */

var gameBootstrapper = {
    init: function(){
        var game = new Phaser.Game(600, 400, Phaser.AUTO, 'game');

        game.state.add('boot', MyGame.Boot);
        game.state.add('play', MyGame.Play);

        game.state.start('boot');
    }
};