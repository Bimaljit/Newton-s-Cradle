class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
          restitution:1.0,
          density:1.0,
          friction:0.5 
        }
        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.radius=radius;

    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER)
        rotate(angle);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}