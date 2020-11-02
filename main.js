const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(1200,600);             // predefined method
  game.setupGame();
}
function draw() {
    clear();
  game.drawGame();

}

// add the jump function here:
function keyPressed() {

  if ( keyCode === 32)
  {
    game.player.jump();     // player lives in game
  }

  if (keyCode === 39)
   { game.player.right();
}

   if (keyCode === 37)
   { game.player.left(); }
}
