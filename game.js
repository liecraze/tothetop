class Game {
    constructor() {
      // define the empty array for the coins here
      this.obstacles = []; 
  
    }
    preloadGame() {
      console.log("this is the game preload");
      this.backgroundImages=[{src: loadImage("hintergrund1.png"), x:0, speed: 0},
      {src: loadImage("hintergrund2.png"), x:0, speed: 1}, 
      {src: loadImage("hintergrund3.png"), x:0, speed: 2}, 
      {src: loadImage("hintergrund4.png"), x:0, speed: 3},
      {src: loadImage("hintergrund5.png"), x:0, speed: 4}];
      // load in images/gifs here
      this.playerImage = loadImage("girlrunning.gif");
      this.balloon = loadImage("balloon.png");
      this.coinImage = loadImage("moneywings.png"); 
   
    }
    setupGame() {
      console.log("this is the game setup");
      //  initialize background + player here
      // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    this.background = new Background(); 
    this.background.images = this.backgroundImages; 
    this.player = new Player (this.playerImage); 
    this.text = new Text (); 
    }
  
    drawGame() {
      console.log("this is the game draw");
      //  call the draw functions for the player + the background
      // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
    this.background.drawBackground(); 
    
    this.player.drawPlayer();
    
    if (frameCount % 60 === 0)
    { 
      this.obstacles.push(new Obstacle(this.coinImage));
    } 
    this.obstacles.forEach(function(obstacle){
      obstacle.drawObstacle();

    }
     
    
    );

 
  
    this.obstacles = this.obstacles.filter((obstacle) => {      // in the array stay only the ones that doesnt get hit
      if (obstacle.collision(this.player)) {
        game.player.score ++; 
        console.log(game.player.score);
        game.player.addPoints(); 
        return false;
      } else {
        return true;
      }
    });

   // this.text.drawText(); 
   
  }
  }
  
  