class Paper{
    constructor(x,y, radius){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.image = loadImage("paper.png");
        this.body = Matter.Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }

    display(){
    var paperpos =this.body.position;
    
      push();
      translate(paperpos.x, paperpos.y);
      rotate(50);
      RectMode(CENTER);
      //strokeWeight(4);
      stroke("green");
      fill(255, 0, 255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
}
    
