class canonball     
 {
   constructor(x,y)
  {
      var options= 
      {
      isStatic:true

      }
   this.r=30;
   
   this.body=Bodies.circle(x,y,this.r,options);
   this.canonball=loadImage("assets/cannonball.png");
   this.trayectory=[];
   World.add(world,this.body);
  }
    shoot()
   {
  var newAngle=canon.angle-28
  newAngle=newAngle*(3.14/180);
  var velocity=p5.Vector.fromAngle(newAngle);
  velocity.mult(.5);
  Matter.Body.setStatic(this.body,false);
  Matter.Body.setVelocity(this.body,{
    x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)
  });


   }

  display() 
  {
    //aqui nos quedamos :)
    var angle=this.body.angle
      var pos=this.body.position;
    push ();
   
    imageMode(CENTER);
    image(this.canonball,pos.x,pos.y,this.r,this.r);
    pop  ();
    if(this.body.velocity.x>0&&pos.x>10)
    {
    var position=[pos.x,pos.y];
   this.trayectory.push(position);
    }
  for(var z=0;z<this.trayectory.length;z=z+1){
    image(this.canonball,this.trayectory[z][0],this.trayectory[z][1]);
  }
  }
}