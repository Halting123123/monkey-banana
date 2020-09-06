
var monkey , monkey_running,edges;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
obstacleImage=loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(10,580,10,20)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.09
  ground=createSprite(0,595,1200,35)
edges=createEdgeSprites(); 
  invisibleGround=createSprite(0,580,1300,2) ;
  invisibleGround.visible=false}


function draw() {
  background("white")
 drawSprites();
  ground.velocityX= -4
 
   
      
  if (ground.x < 0){
    ground.x = ground.width/2;
}
 if(keyDown("space") && monkey.y>=530) {
    monkey.velocityY = -10;
 }
    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(invisibleGround); 

  spawnBanana();
  spawnObstacles();
}

function spawnBanana(){ 
if (frameCount % 80 === 0){ 
  banana=createSprite(600,470);
  banana.addImage("banana",bananaImage)
  banana.scale=0.07
  banana.x=Math.round(random(200,600))  
  banana.lifetime=300;
  banana.velocityX=-3
}}

function spawnObstacles(){
  if (frameCount % 300 === 0){
  obstacle=createSprite(-10,559); obstacle.addImage(obstacleImage);  
    obstacle.scale=0.1
     obstacle.x=Math.round(random(200,600)) 
 obstacle.velocityX=-3 
  }}





