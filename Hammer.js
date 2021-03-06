class Hammer {
    constructor(x,y,width,height,angle){
        var options = {
          density : 2,
          friction : 1.0,
          restitution :0.5
      }
      this.body =  Bodies.rectangle(x,y,this.width,this.height,options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      Matter.Body.setAngle(this.body,this.angle)
      World.add(world,this.body);
    }
  
    display() {
      var angle = this.body.angle;
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      push();
      fill("yellow")
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
      
    }
  }