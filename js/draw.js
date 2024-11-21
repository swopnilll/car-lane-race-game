let draw = () => {
    var animationFrame = requestAnimationFrame(draw); 
    // Game intro Screen formation
    if(!isGameStarted) {
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect(0, 0, WIDTH, HEIGHT);
        c.fill();
        c.closePath();
      
        c.beginPath();
        c.fillStyle = "green";
        c.font = "35px ARIAl";
        c.fillText("CAR RACE", 6,50);
        c.fillStyle = "white";
        c.font = "15px ARIAl";
        c.fillText("Press Enter to Play",6,80);
        c.fill();
        c.closePath();
    }
    // screen after the game is over
    else if(isGameOver) { 
  
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect(0, 0, WIDTH, HEIGHT);
        c.fill();
        c.closePath();
        
        c.beginPath();
        c.fillStyle = "white";
        c.font = "30px Arial";
        c.fillText("Game Over", WIDTH / 3, HEIGHT / 4);
      
        c.fillStyle = "white";
        c.font = "15px roman";
        c.fillText(`Your score: ${score}`, WIDTH / 4, HEIGHT / 1.8);
           
        c.fillStyle = "white";
        c.font = "12px Arial";
        c.fillText(`Press F5 to play again.`, WIDTH / 4, HEIGHT / 1.2);
        
        c.fill();
        c.closePath();    
  
        cancelAnimationFrame(animationFrame);
    }
    else {
      // running game screen formation
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect(0, 0, WIDTH, HEIGHT);
        c.fill();
        c.closePath();
  
      
        for(let i = 1; i <= totalLanes - 1; i++) {
          c.beginPath();
          c.moveTo(WIDTH / 3 * i, 0);
          c.lineTo(WIDTH / 3 * i, HEIGHT);
          c.setLineDash([20, 35]); 
          c.lineWidth = 3;
          c.strokeStyle = "red";  
          c.stroke();
          c.closePath();      
        }
          c.lineDashOffset -= backgroundSpeed;    
  
          makeUpdates();
          for(let i = cars.length - 1; i >= 0; i--) {
            cars[i].update();
            cars[i].draw();
  
            if(i != 0) {
              cars[i].updateSpeed();
                if(cars[i].isPassed(cars[0])) {
                  cars.splice(i, 1);   
                  score++;
                }
  
                else if(cars[i].isColliding(cars[0])) {                                                 
                  isGameOver = true;
                }    
            }   
          }
          // score display while playing game
          c.beginPath();
          c.fillStyle = "green";
          c.font = "15px Arial";
          c.fillText(`Score: ${score}`, 10, 20);
      }
  }
  draw();
