class Ball{
constructor(x,y,r){
    var options={
    isStatic:false,
    restitution:0.3

    }
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options);
this.paperImg=loadImage("Images/paper1.png");
World.add(world,this.body);
}
display(){
var ballPosition=this.body.position;
push();
translate(ballPosition.x,ballPosition.y);
rectMode(CENTER);
strokeWeight(3);
image(this.paperImg,0,0,this.r,this.r);
pop();
}

}