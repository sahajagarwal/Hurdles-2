var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var database;
var allPlayers;
var score = 0;
var hurdles;

var form, player, game;
var players,player1,player2,player3,player4;
var player1_img, player2_img, player3_img, player4_img,hurdles_img;

function preload(){
  player1_img = loadImage("player1.gif");
  player2_img = loadImage("player2.gif");
  player3_img = loadImage("player3.png");
  player4_img = loadImage("player4.jpg");
  player1_img = loadImage("player1.gif");
  hurdles_img = loadImage("hurdles.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
