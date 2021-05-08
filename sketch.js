var bullet,wall;
var speed,weight,thickness;
var deformation;

function setup() {
  createCanvas(1400,400);
  
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

bullet = createSprite(50,200,40,3);
wall = createSprite(1300,200,thickness,200);

wall.shapeColor = color(80,80,80);

bullet.velocityX = speed;


}

function draw() {
  background(0);  

if (isTouching(wall,bullet)){

  deformation = ((0.5 * weight * speed * speed) / (thickness * thickness * thickness));

  bullet.velocityX = 0;

  if (deformation> 10){
   wall.shapeColor = color(255,0,0);

  } else if ( deformation < 10){
    wall.shapeColor = color(0,255,0);
  }

}

  drawSprites();
}

function isTouching(wall,bullet){

  if (wall.x-bullet.x < (bullet.width + wall.width)/2){
    return true;
    }else {
      return false;
    }
 }