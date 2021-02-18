
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var bobDiameter,posX,posY, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,roof,rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=50;
	posX=width/2;
	posY=height/4+200
	//Create the Bodies Here.
	roof = new Roof(width/2, height/4, 250, 15);
	bobObject1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bobObject2=new Bob(posX-bobDiameter,posY,bobDiameter)
	bobObject3=new Bob(posX,posY,bobDiameter);
	bobObject4=new Bob(posX+bobDiameter,posY,bobDiameter);
	bobObject5=new Bob(posX+bobDiameter*2,posY,bobDiameter);
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	rope2= new Rope (bobObject2.body,roof.body,-bobDiameter,0)
	rope3= new Rope (bobObject3.body,roof.body,0,0)
	rope4= new Rope(bobObject4.body,roof.body,bobDiameter,0)
	rope5= new Rope(bobObject5.body,roof.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  roof.display();
  rope1.display();
  
  bobObject1.display();
  rope2.display();
  bobObject2.display();
  rope3.display();
  bobObject3.display();
  rope4.display();
  bobObject4.display();
  rope5.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:-45}); } 
}