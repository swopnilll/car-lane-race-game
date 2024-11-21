document.onkeydown = e => {
    if(e.keyCode == 37) {
      if(cars[0].currentLane != 1) {
        cars[0].currentLane -= 1; 
      }
    }
    else if(e.keyCode == 39) {
      if(cars[0].currentLane != 3) {
        cars[0].currentLane += 1;   
      }  
    }
    else if(e.keyCode  == 13) {
      if(!isGameStarted) {
            setInterval(function() {
                var tempCar = new Car(false);
                cars.push(tempCar);
            }, generationRate);
        isGameStarted = true;
      }
    }
  }