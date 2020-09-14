var monkey, mRunning, banana, bananaG , stone, bImg, sImg, ground; 
var obsGrp, score, bg, bgImg;




function preload(){
  bgImg = loadImage("jungle.jpg"); 
  
mRunning =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
bImg = loadImage("banana.png");
sImg = loadImage("stone.png");
  
}

function setup() {
  createCanvas(500, 400);
  
  monkey = createSprite(50, 350, 20, 20);
  monkey.addAnimation( "name",mRunning);
  monkey.scale = 0.10;
  
  bg = createSprite(200, 200);
  bg.scale = 0.8;
  bg.addAnimation("hi",bgImg);
  
  monkey.depth = bg.depth+1;
  
  ground = createSprite(300, 385, 600, 10);
  ground.visible = false;
  
  bananaG = createGroup();
  obsGrp = createGroup();
  
}

function draw() {
  background(220);
  
  monkey.velocityY = monkey.velocityY + 0.5;
 
  if (keyDown("space")&&monkey.y > 340) {
      monkey.velocityY = -12.5            ;
    }
  
  monkey.collide(ground);
  
  if (bg.x < 100 ) {
   bg.x = bg.width/2;
  }
    
  bg.velocityX = -4;
  
  food();
  obs();
  
  drawSprites();
}

function food() {
  
  if (frameCount % 80===0) {
      banana = createSprite(500, random(250, 300), 10,10);
      banana.addImage("Banana", bImg);
      banana.scale = 0.05;
      banana.velocityX = -10;
      bananaG.add(banana);
      bananaG.setLifetimeEach(60);
      
  }
  
}

function obs() {
  
  if (World.frameCount % 300===0) {
      stone = createSprite(500,355, 10,10);
      stone.addImage("Stone", sImg);
      stone.scale = 0.15;
      stone.velocityX = -10;
      obsGrp.add(stone);
      obsGrp.setLifetimeEach(50);
  }
  
}




