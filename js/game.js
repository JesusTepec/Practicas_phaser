GamePlayManager = {
  init: function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
  },
  preload: function(){
    game.load.image('background', 'assets/images/background.png')
  },
  create: function (){
    game.add.sprite(0, 0, 'background');
  },
  update: function (){

  }
}

let game = new Phaser.Game(640, 360, Phaser.CANVAS);

game.state.add('gameplay', GamePlayManager);
game.state.start('gameplay');
