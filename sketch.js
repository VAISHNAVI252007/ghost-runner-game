var tower,tower_moving;
var ghostStanding,ghostJumping;
var ghost;
var gameState="play";
function preload(){
  tower_moving=loadImage("tower.png")
  ghostStanding=loadImage("ghost-standing.png")
  doorImg=loadImage("door.png");
  restartImg = loadImage("restart.png")
}
function setup(){
  createCanvas(500,500)
  tower=createSprite(250,300)
  tower.addImage("tower",tower_moving)
  tower.scale=0.9;
  tower.velocityY=-3;
  ghost=createSprite(250,400);
  ghost.addImage("ghost",ghostStanding)
  ghost.scale=0.6;
  doorG= new Group()
  restart = createSprite(200,250);
  restart.addImage(restartImg);
  

 
}
function draw(){
  //background(tower_moving)
  if(gameState==="play"){
    if (tower.y<0){
    tower.y=300
    }
      if (keyDown("right_arrow")){
    ghost.x=ghost.x+2
  }
  
  if (keyDown("left_arrow")){
    ghost.x=ghost.x-2;
  }
  
  if (keyDown("space")){
    ghost.velocityY=-6;
  }
  ghost.velocityY=ghost.velocityY+0.5;
  obstacles();
  if(doorG.isTouching(ghost)){
    gameState="end"
    
    
  }
  restart.visible=false;
  
    
  }
  else if(gameState==="end"){
    /*fill("black")
    textSize(16)
    text("game over",200,300)*/
    tower.velocityY=0;
    ghost.velocityY=0;
    doorG.setVelocityYEach(0)
    restart.visible=true;
    if (mousePressedOver(restart)) {
    reset();
    
    }
    
  }
  
 drawSprites(); 
  
  
  
}
function reset(){
  gameState="play"
  doorG.destroyEach();
}
function obstacles(){
  if (frameCount%90===0){
    var door=createSprite(200,300,10,10)
    door.velocityY=-3;
    door.x=Math.round(random(50,400))
    door.addImage("door",doorImg)
    doorG.add(door)
    
  }
  
}