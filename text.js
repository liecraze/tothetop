class Text {
    constructor() {
      // define the images,size and x/y values in the constructor
     
  this.text = "Bring me a coffee"; 
  this.text1 = "You're too emotional";
  this.text2 = "Where are your kids"; 
  this.text3 = "You only got that job because of your looks";
  this.text4 = "This dress makes you look fat";
  this.text5 = "You'd look better if you worked out more"; 
  this.text6 = "Who did you sleep with to get that position?"; 
  this.text7 = "We decided that on our men's beer round" ;
  this.text8 = "You're so bossy";
  this.text9 = "You're too quiet";
  this.text10 = "You're prettier when you smile"; 
  this.text11 = "Can you do the dishes? You're better in this"; 
  this.text12 = "Are you on your period?" ; 
  this.text13 = "You`re quite good for a woman";
  this.text14 = "The customers like it when you wear skirts"; 
  this.text15 = "She will get pregnant soon anyway";
  this.text16 = "Boys will be boys :)"; 
  this.text17 = "Calm down sweetheart"; 
  this.text18 = "She's too distracting"; 
  this.text19 = "Relax, it was just a joke ;)"; 
  this.text20 = "A woman wouldn't understand this";
  this.text21 = "Let me explain that to you";
  this.text22 = "Women in the workspace only make things complicated"; 

  this.textArr = [this.text, this.text1, this.text2, this.text3, this.text4, this.text5, this.text6, this.text7,
  this.text8, this.text9, this.text10, this.text11, this.text12, this.text13, this.text14, this.text15, this.text16, 
  this.text17, this.text18, this.text19, this.text20, this.text21, this.text22]; 
  this.x = width ;  
  this.y = 500 ;
  this.random = Math.floor(Math.random() * this.textArr.length); 
  this.i = 0; 


    //this.width = 60;
    //this.height = 40;

    }
  
    //   define the collision function
   
    collide (playerInfo) {
      let textX = this.x + 20;    // giving it die Größe vom Coin 
       let textY = this.y ; 
      let playerX = playerInfo.x + playerInfo.width / 2 ;   // giving it the Größe vom Player
     let playerY = playerInfo.y + playerInfo.height / 2 ; 
         
       if (dist(textX, textY, playerX, playerY) < 100) {
      return true;
       } else {
        return false;
       }
    }
    
    
    drawText() {
      this.x = this.x - 8; 
      fill(255, 255, 255);
      textSize(25);
      // fill(243,106,39);
      // // strokeWeight(1);
      text(this.textArr[this.random], this.x, this.y );

    }
  }
  