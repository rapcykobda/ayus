const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var canon1
var ground, backgroundImg,tower, towerImg;
var angle
var bala1 
var ball=[]
function preload() {
  backgroundImg=loadImage("assets/background.gif");
 towerImg=loadImage("assets/tower.png");
}
function setup() 
{

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
    
  }
  angleMode(DEGREES);
  angle=15;
  ground=Bodies.rectangle(0,height-1,width*2,1,options);
  World.add(world,ground);
 tower=Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);
 canon1=new canon (170,110,130,100,angle);
bala1= new canonball (canon1.x,canon1.y);

}

function draw() {
  image(backgroundImg,0,0,width,height);
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);
  
    push ();
  imageMode(CENTER)
   image(towerImg,tower.position.x,tower.position.y,160,310);
  pop ();
  canon1.display();
  bala1.display();
  for(var i=0;i<ball.length;i++)[
  showcanonballs(ball[i])


  ]
  //trayectory.display();
}
function keypressed(){
  if (keyCode === DOWN_ARROW) 
  {  var canonball = new canonball(canon.x, canon.y); 
     canonball.trajectory = [];
     Matter.Body.setAngle(canonball.body, canon.angle);
      ball.push(canonball); 
    }
    
}
function showcanonballs(ball){
if(ball){
 ball.display
}

 
}
function keyReleased() 
{ if (keyCode == DOWN_ARROW)
   { ball[ball.length - 1].shoot(); 
  } 
}