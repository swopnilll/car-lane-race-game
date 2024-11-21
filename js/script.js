// setting up the canvas
const WIDTH = 300;
const HEIGHT = 600;
var canvas = document.getElementById('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
var c = canvas.getContext("2d");

// player car and obstacle car images
const YOURCAR = new Image(); 
YOURCAR.src = "./images/playercar.png";
const OBSCAR = new Image();
OBSCAR.src = "./images/obstaclecar.png";

// variables for the game
let obsCount = 3;           
let generationRate = 1200;    
let laneWidth = WIDTH / obsCount; 
let score = 0;                              
let backgroundSpeed = 6     
const totalLanes = 3;     
let isGameStarted = false;   
let isGameOver = false;  

let cars = [];        
cars.push(new Car(true));

let makeUpdates = () => {
  if( score > 5) {
      generationRate = 1000;
      obsCount = 3;
      backgroundSpeed = 20;
  }
}

  

