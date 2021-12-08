class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.boxWidth=150;
        this.boxHeight=150;
        this.boxThickness=10;
        this.angle=0;
this.bottom=Bodies.rectangle(this.x,this.y,this.boxWidth,this.boxThickness,{isStatic:true});
this.left=Bodies.rectangle(this.x-this.boxWidth/2,this.y-this.boxHeight/2,this.boxThickness,this.boxHeight,
    {isStatic:true});
Matter.Body.setAngle(this.left,this.angle);
this.right=Bodies.rectangle(this.x+this.boxWidth/2,this.y-this.boxHeight/2,this.boxThickness,this.boxHeight,{isStatic:true});
Matter.Body.setAngle(this.right,this.angle);
World.add(world,this.bottom);
World.add(world,this.left);
World.add(world,this.right);
    }
display(){
    var posBottom=this.bottom.position;
    var posLeft=this.left.position;
    var posRight=this.right.position;
    push();
translate(posLeft.x,posLeft.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
stroke(255);
rotate(this.angle);
rect(0,0,this.boxThickness,this.boxHeight);
  pop();

  push();
  translate(posRight.x,posRight.y);
  rectMode(CENTER);
  angleMode(RADIANS);
  fill(255);
  stroke(255);
  rotate(this.angle);
  rect(0,0,this.boxThickness,this.boxHeight);
    pop();

    push();
    translate(posBottom.x,posBottom.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rotate(this.angle);
    rect(0,0,this.boxWidth,this.boxThickness);
      pop();
    
  
}
}