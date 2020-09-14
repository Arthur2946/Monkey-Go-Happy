var monkey, mRunning, banana, bananaG , stone, bImg, sImg, ground; 
var obsGrp, score, bg, bgImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



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
  
  score = 0;
  
}

function draw() {
  background(220);
  
  monkey.velocityY = monkey.velocityY + 0.5;
 
  if (keyDown("space")&&monkey.y > 300) {
      monkey.velocityY = -12.5            ;
    }
  
  monkey.collide(ground);
  
  if (bg.x < 100 ) {
   bg.x = bg.width/2;
  }
  
  if (bananaG.isTouching(monkey)){
     score = score+2; 
     bananaG.destroyEach();
  }
  
  switch(score) {
      case 10: monkey.scale = 0.12;
              break;
      case 20: monkey.scale = 0.14;
              break;
      case 30: monkey.scale = 0.16;
              break;
      case 40: monkey.scale = 0.18;
              break;
      default:break;}

    
  bg.velocityX = -4;
  
  if(obsGrp.isTouching(monkey)){
     monkey.scale = 0.10; 
  }
  
  food();
  obs();
  
  drawSprites();
  
      stroke("white");
      textSize(20);
      fill("white")
      text("Score:"+score, 400, 50);
 
}

function food() {
  
  if (frameCount % 80===0) {
      banana = createSprite(500, random(150, 250), 10,10);
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



