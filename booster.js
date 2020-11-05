class Booster {
    constructor(motivationalSign) {
      // define the images,size and x/y values in the constructor
      this.image=motivationalSign;
      this.x = Math.random() * height / 1.5 ;  // weil die coins sollen von rechts kommen 
      this.y =  0;
      this.width = 60;
      this.height = 40;
    }
  
    //   define the collision function
    collect(playerInfo) {
     let boosterX = this.x + this.width / 2;    // giving it die Größe vom Coin 
      let boosterY = this.y + this.height / 2; 
     let playerX = playerInfo.x + playerInfo.width / 2;   // giving it the Größe vom Player
    let playerY = playerInfo.y + playerInfo.height /2 ; 
        
      if (dist(boosterX, boosterY, playerX, playerY) < 80) {
     return true;
      } else {
       return false;
      }
    }
    
    
    drawBooster() {
      // draw the coins
      this.y++;
      //this.collision(game.player);          // needs to be checked all the time, darum in der draw Funktion 
      image(this.image, this.x, this.y, this.width, this.height)
    }
  }
  