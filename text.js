class Text {
    //constructor() {
      // define the images,size and x/y values in the constructor
      //this.text = "Hallo"; 
     // this.x = width ;  // weil die coins sollen von rechts kommen 
     // this.y = Math.random() * height / 1.5 ;
       // this.width = 80;
      // this.height = 50;
    }
  
    //   define the collision function
   // collision(playerInfo) {
      //let txtX = this.x + this.width / 2;    // giving it die Größe vom Coin 
     // let txtY = this.y + this.height / 2; 
    //  let txtX = playerInfo.x + playerInfo.width / 2;   // giving it the Größe vom Player
     // let txtY = playerInfo.y + playerInfo.height /2 ; 
        
     // if (dist(txtX, txtY, playerX, playerY) < 80) {
     //   return true;
     // } else {
      //  return false;
    //  }
    //}
    
    
    drawText() {
      // draw the Text
     // this.x--;
     let s = 'The quick brown fox jumped over the lazy dog.';
     fill(50);
     text(s, 10, 10, 70, 80);
 
      //this.collision(game.player);          // needs to be checked all the time, darum in der draw Funktion 
    }
  }

  // check https://p5js.org/examples/typography-words.html
  