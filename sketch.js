var movingRect;
var fixedRect;

var object1;





function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(300,300,50,80);
  fixedRect.shapeColor = "green";
  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "white";
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(isTouching(object1,movingRect)){
    movingRect.shapeColor = "blue";
    object1.shapeColor = "blue";
    

  }

  else{
    movingRect.shapeColor = "green";
    object1.shapeColor = "white";
  
  }
   
  
  
  
  
  drawSprites();
}

