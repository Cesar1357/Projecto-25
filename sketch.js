
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObject	
var world;
var Paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Paper = new paper(200,450,50);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 


  

  groundObject.display();
  dustbinObj.display();
  Paper.display();

  if(keyDown(DOWN_ARROW)){
	Matter.Body.applyForce(Paper.body, {x:400,y:-90}, 5)
}


  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:400,y:-90});
  }
}

