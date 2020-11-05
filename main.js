let gameStart = false; 

const game = new Game();

function preload() {
  game.preloadGame();
  // song = loadSound("Spy.mp3");
  this.img = loadImage("balloon.png"); 
  this.boostScore = document.getElementById('boost'); 
  this.boost = 5; 
  this.warning = document.getElementById("warning"); 
  this.life = 3; 
  this.lifeScore = document.getElementById('life'); 
  this.teleport = loadSound("teleport2.mp3");
  this.jumpy = loadSound("jump6.mp3"); 
  
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
   { this.teleport.play();
     game.player.y = 100 ;
  image(this.img, game.player.x, game.player.y, 400, 300);}
  // else 
   // {this.boostScore.innerText = "ZERO!!!"}; 
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
    this.jumpy.play(); 
    game.player.jump();     // player lives in game
   // this.warning.innerText = "You hit the glass ceiling"; 
    
  }

  if (keyCode === 39)
   { 
     game.player.right();
}

   if (keyCode === 37)
   { game.player.left(); }

   if (keyCode === 38)
   {  
    if (this.boost > 0) 
    this.boost--; 
    this.boostScore.innerText = this.boost; 

   }

   if (keyCode === 13) {
    gameStart = true;
    document.querySelector(".game-start").style.display = "none"; 
  
  
  }

   if (keyCode === 80)
   { gameStart=false;
    document.querySelector(".game-start").style.display = "flex";

      } 


}