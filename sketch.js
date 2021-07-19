var bullet, speed, weight
var wall, thickness


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);

  speed=random(200, 300)
  weight=random(30, 50)
  thickness=random(20, 80)
  bullet.velocityX = speed
  bullet.shapeColor = "white"

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor=color(80, 80, 80)
}

function draw() {
  background(0);  

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor = "red"
    }
    else{
      wall.shapeColor = "green"
    }
  }


  drawSprites();
}

function hasCollided(bullet1, wall1){
  bulletR = bullet1.x + bullet1.width
  wallL = wall1.x
  if(bulletR>=wallL){
    return true
  }
  return false
}