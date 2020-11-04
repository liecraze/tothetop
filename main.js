const game = new Game();

function preload() {
  game.preloadGame();
  // song = loadSound("Spy.mp3");
  this.img = loadImage("balloon.png"); 
  this.boostScore = document.getElementById('boost'); 
  this.boost = 5; 
  this.warning = document.getElementById("warning"); 
  
}
function setup() {
  createCanvas(1200,600);             // predefined method
  game.setupGame();
}
function draw() {
 
    clear();
  game.drawGame();

 // song.play();

 if (keyIsDown(UP_ARROW)) {
    if (this.boost > 0)
   { game.player.y = 100 ;
  image(this.img, game.player.x, game.player.y, 300, 300);}
  else 
  
   {this.boostScore.innerText = "ZERO!!!"}; 
 }

  if (keyIsDown(RIGHT_ARROW)) {
    game.player.right();  
  
  }

  if (keyIsDown(LEFT_ARROW)) {
   game.player.left(); 
  
  }
 
}

// add the jump function here:
function keyPressed() {

  if ( keyCode === 32)
  {
    game.player.jump();     // player lives in game
    
    
  }

  if (keyCode === 39)
   { 
     game.player.right();
}

   if (keyCode === 37)
   { game.player.left(); }

   if (keyCode === 38)
   {  
    this.boost--; 
    this.boostScore.innerText = this.boost; 

   }


}