var PLAY = 1;
var END = 0;
var gameState = PLAY;
var backgroundImg;





function preload(){
    backgroundImg = loadImage("BG.png");

}

  function setup() {
    createCanvas(1000,1000)
  
    back = createSprite(1000,390)
back.addImage(backgroundImg)
back.scale= 2.2
;

}

function draw() {
  back.debug=true
    background("white");
    
    drawSprites();
}