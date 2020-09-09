Mylibrary.js

function isTouching(object11,object12){
  if (object11.x-object12.x<object11.width/2 + object12.width/2 &&
    object12.x - object11.x <object11.width/2 + object12.width/2
     && object11.y-object12.y<object11.height/2 + object12.height/2 &&
     object12.y - object11.y < object11.height/2 + object12.height/2 ){
    return true;
  
     
}
else{
  return false;
}
}
