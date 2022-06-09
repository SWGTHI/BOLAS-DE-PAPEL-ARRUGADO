
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObj
var leftSide
var rightSide
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.

	var ball_options={
		isStatic:false,
		restitution:1,
		friction:0,
		destiny:1.2
	}

ball = Bodies.circle(20,200,20,ball_options)
World.add(world,ball)

	Engine.run(engine);
  
	groundObj = new Ground(400,695,800,20)
	leftSide = new Ground(690,675,10,90)
	rightSide = new Ground(590,675,10,70)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x: 0,y: 0},{x:0.03,y:-0.04})
	}
	/*if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball,{x: 0,y: 0},{x:-0.03,y:-0.04})
	}*/
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();

 groundObj.show()
 leftSide.show()
 rightSide.show()
 
}



