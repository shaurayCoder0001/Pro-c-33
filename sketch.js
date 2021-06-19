const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter. Constraint;

var engine, world;
var backgroundImg;

var bg  ;
var Snowfall1 , Snowfall2

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  getBackgroundImg();
 
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
   world = engine.world;
 
 
   Snowfall1 = new Snow ( 400,200,50,50)
   Snowfall2 = new Snow ( 100,200,50,50)
}

function draw() {

  if(backgroundImg)
  background(backgroundImg); 
  Engine.update(engine);

  Snowfall1.display()
  Snowfall2.display()

 
}



 
async function getBackgroundImg(){
   
  var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
        var responseJSON = await response.json()
        var datetime = responseJSON.datetime;
        var hour = datetime.slice (11,13)

 
  if(hour >=04 && hour<=16){
      bg = "snow1.jpg"
 }
 else if(hour >=16 && hour<=23){
   bg = "snow2.jpg"
}

else{
     bg = "snow3.jpg"
}

 
  backgroundImg=loadImage(bg);
  console.log(backgroundImg)   
    }


      function keyPressed() {
        if (keyCode === DOWN_ARROW) {
        
       
        Matter.Body.setStatic(Snowfall1,false)
        Matter.Body.setStatic(Snowfall2,false)
         }
       }
    
   