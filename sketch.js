var Background,bgImg;
var spaceship,spaceshipImg;
var edges
var moonImg,moonG;
var enemyImg,enemyG;

var bImg;

function preload(){
  bgImg = loadImage("bg.jpg");
  spaceshipImg = loadImage("ss.png");
  moonImg = loadImage("moon.png");
  enemyImg = loadImage("enemy.png");
  bImg = loadImage("bullet.png");
  
}
function setup() {
  createCanvas(1200,1400);
 
  Background=createSprite(600,400);
  Background.addImage(bgImg);
  Background.velocityY = 4;

  spaceship = createSprite(600,1200);
  spaceship.addAnimation("space",spaceshipImg);
  spaceship.scale = 0.1;



  
  moonG = new Group();
  enemyG = new Group();
  bulletG = new Group();
}

function draw() {
  background(0);
  if(Background.y > 1200 ){
    Background.y = height/2;
  }
  if(keyDown("left")){
    spaceship.velocityX = -5;
  }
  if(keyDown("right")){
    spaceship.velocityX = 5;
  }
 
  if(bulletG.isTouching(enemyG)){
    enemyG.destroyEach();
    bulletG.destroyEach();
    
  }


  
   
  edges= createEdgeSprites();
  spaceship.collide(edges);
  createMoon();
  createEnemy();
  createBullet();
  drawSprites();
}

function createMoon() {
  if (World.frameCount % 500 == 0) {
  var moon = createSprite(Math.round(random(100, 1000)),100, 100, 100);
  moon.addImage(moonImg);
  moon.scale=0.3;
  moon.velocityY = 5;
  moon.lifetime = 350;
  moonG.add(moon);
  }
  }

  function createEnemy() {
    if (World.frameCount % 100 == 0) {
    var enemy = createSprite(Math.round(random(90, 1100)),100, 100, 100);
    enemy.addImage(enemyImg);
    enemy.scale=0.4;
    enemy.velocityY = 5;
    enemy.lifetime = 350;
    enemyG.add(enemy);
    }
    }
   
    function createBullet(){
      if(keyWentDown("space")){
        var bullet = createSprite(spaceship.x,spaceship.y);
        bullet.addAnimation("b1",bImg);
        bullet.velocityY = -15;
        bulletG.add(bullet);
        bullet.scale=0.1;
      }
    }