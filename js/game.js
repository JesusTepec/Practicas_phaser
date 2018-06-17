GamePlayManager = {
  init: function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    this.iniciar = false;
  },
  preload: function(){
    game.load.image('background', 'assets/images/background.png')
    game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);
  },
  create: function (){
    game.add.sprite(0, 0, 'background');
    this.horse = game.add.sprite(0, 10, 'horse');
    this.horse.frame = 1;
    this.horse.x = game.width / 2;
    this.horse.y = game.height / 2;
    this.horse.anchor.setTo(0.5, 0.5);
    game.input.onDown.add(this.onTap, this);
  },
  onTap: function(){
    this.iniciar = true;
  },
  update: function (){
    if(this.iniciar) {
      var puntoX = game.input.x;
      var puntoY = game.input.y;
      var distX = puntoX - this.horse.x;
      var distY = puntoY - this.horse.y;
      if(distX > 0) {
        this.horse.scale.setTo(1, 1);
      } else{
        this.horse.scale.setTo(-1, 1);
      }
      this.horse.x += distX * 0.02;
      this.horse.y += distY * 0.02;
    }
  }
}

let game = new Phaser.Game(1136, 640, Phaser.CANVAS);

game.state.add('gameplay', GamePlayManager);
game.state.start('gameplay');
