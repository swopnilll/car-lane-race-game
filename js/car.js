
let randomNumbers = (max, min) => Math.floor(Math.random() * (max - min)) + min;
class Car {
    constructor(isPlayer) {
        this.x;
        this.y;
        this.width = 30;
        this.height = 35;
        this.isPlayer = isPlayer;
        this.speed = 3;
        this.health;
        this.currentLane;
        this.offSet = 0;
        this.imageOffSet = -25;  
    // if other car
        if(!this.isPlayer) {
          this.y = 0;
          this.offSet = - this.height;
          this.currentLane = randomNumbers(1, 4);
        }
    // if its player car.
        if(this.isPlayer) {
          this.y = HEIGHT;
          this.currentLane = 2;
       }
    }

  // crash check 
  isColliding(that) {
    if(this.currentLane == that.currentLane && this.y + this.height + this.offSet  >= HEIGHT - that.height) {
      return true;
    }
      return false;
  }
  // car pass check
  isPassed(that) {
    if(this.currentLane != that.currentLane && this.y + this.offSet > HEIGHT) {   
      return true;
    }
      return false;  
  }
  // to draw the cars in canvas.
  draw() {
    
    
      if(!this.isPlayer) {

          c.save();
          c.beginPath();
          c.drawImage(OBSCAR, ((laneWidth - this.width) / 2 ) + laneWidth * (this.currentLane - 1), this.y + this.offSet);
          c.fill();
          c.closePath();
          c.restore();
      }
   
      else if(this.isPlayer) {

          c.save();
          c.beginPath();
          c.drawImage(YOURCAR, ((laneWidth - this.width) / 2 ) + laneWidth * (this.currentLane - 1), this.y - this.height);
          c.fill();
          c.closePath();
          c.restore();
      }

  }

  update() {
    if(!this.isPlayer) {
      this.y += this.speed;
    }
  }

  updateSpeed() {
    if(score < 5) {
      this.speed = 5;
    }else  {
      this.speed = 12;
    }
  }
}
