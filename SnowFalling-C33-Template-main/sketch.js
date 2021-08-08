
function preload(){
 snowImage = loadImage("snow5.webp")
 backgroundImage = loadImage("snow2.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  for(i = 0; i <50; i++){
    snow = createSprite(random (100,windowWidth),0)
    snow.addImage(snowImage)
    snow.scale = 0.04
    snow.velocityY = 3
    
  }
}





function draw() {
  background(backgroundImage);  
  drawSprites();
}