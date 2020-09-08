var movingRect;
var fixedRect;




function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(300,300,50,80);
  fixedRect.shapeColor = "green";
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (movingRect.x-fixedRect.x<movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
     && movingRect.y-fixedRect.y<movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
     movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
     
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  
  
  
  
  drawSprites();
}