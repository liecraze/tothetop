class Game {
    constructor() {
      // define the empty array for the coins here
      this.obstacles = []; 
      this.boosters = []; 
      this.texts = []; 
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
      this.motivationalSign = loadImage("ycdi.png"); 
      //jump = loadSound("sounds/jump.mp3");
      this.bup = loadSound("powerup7.mp3");
      this.boostUp = loadSound("1up.mp3"); 
      this.hit = loadSound("gameover.mp3");
      this.coin = loadSound("coins6.mp3");
      //this.gameOver= loadSound("gameover.mp3");
   
    }
    setupGame() {
      console.log("this is the game setup");
      //  initialize background + player here
      // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    this.background = new Background(); 
    this.background.images = this.backgroundImages; 
    this.player = new Player (this.playerImage); 
 
    }
  
    drawGame() {
      console.log("this is the game draw");
      //  call the draw functions for the player + the background
      // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
    

      this.background.drawBackground(); 
    
    this.player.drawPlayer();

    if (gameStart === true)
    {


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
        this.coin.play(); 
        game.player.score ++; 
        console.log(game.player.score);
        game.player.addPoints(); 
        return false;
      } else {
        return true;
      }
    });


    if (frameCount % 1000 === 0)
    { 
      this.boosters.push(new Booster(this.motivationalSign));
    } 
    this.boosters.forEach(function(booster){
      booster.drawBooster();
    }
    );
    this.boosters = this.boosters.filter((booster) => {      // in the array stay only the ones that doesnt get hit
      if (booster.collect(this.player)) {
        this.boostUp.play();
        boost = boost + 3; 
       boostScore.innerText = boost; 
       console.log("Collected"); 
        return false;
      } else {
        return true;
      }
    });

  
    if (frameCount % 200 === 0)
    { 
      this.texts.push(new Text());
    } 
    this.texts.forEach(function(text){
      text.drawText();
    }
    );

   
    
    
    this.texts = this.texts.filter((text) => {      // in the array stay only the ones that doesnt get hit
      if (text.collide(this.player)) {
       console.log("Hit"); 
       this.hit.play();  
       life--; 
       lifeScore.innerText = life; 
        if (life <= 0)
         { frameRate(0);
          this.bup.play(); 
          //this.gameOver.play();
          document.querySelector(".game-over").style.display = "flex";
          
           
           }; 

        return false;
      } else {
        return true;
      }
    });




    if (frameCount % 1500 === true)
    {console.log("now")
    if (frameCount % 300 === 0)
    { 
      this.texts.push(new Text());
    } 
    this.texts.forEach(function(text){
      text.drawText();
    }
    );

   
    
    
    this.texts = this.texts.filter((text) => {      // in the array stay only the ones that doesnt get hit
      if (text.collide(this.player)) {
       console.log("Hit"); 
       this.hit.play();  
       life--; 
       lifeScore.innerText = life; 
        if (life <= 0)
         { frameRate(0);
          this.bup.play(); 
          //this.gameOver.play();
          document.querySelector(".game-over").style.display = "flex";
          
           
           }; 

        return false;
      } else {
        return true;
      }
    });
  
  
  }; 

    
    }
  

   

  }
  }
  
  