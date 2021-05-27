var dog, dog1, Happydog;
var database;
var foodS;
var foodstock;

function preload()
{
dog=loadImage("dogImg.png");
Happydog=loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();

  createCanvas(500,500);
  
  dog1=createSprite(250,300,150,150);
  dog1.addImage(dog);
  dog1.scale= 0.15;

  foodstock=database.ref('Food'); 
  foodstock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
 
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog1.addImage(Happydog);
}
  drawSprites();

fill("white")
stroke("black")

text("food remaining:" +foodS,170,200)
textSize(13)
text("press up arrow key to feed milk",130,10,300,20);


}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if (x<=0){
    x=0;
  
  }

  else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x

  })
}


