var helicopterIMG, helicopterSprite, packageSprite,packageIMG, redzone1, redzone2, redzone3;
var packageBody,ground, rz1body, rz2body, rz3body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	redzone1=createSprite(width/2, height-40, 200, 20);
	redzone1.shapeColor=rgb(255, 0, 0);

	redzone2=createSprite(redzone1.x-100, redzone1.y-100, 10, 200);
	redzone2.shapeColor=rgb(255, 0, 0);

	redzone3=createSprite(redzone1.x+100, redzone1.y-100, 10, 200);
	redzone3.shapeColor=rgb(255, 0, 0);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rz1body = Bodies.rectangle(width/2, height-40, 200, 50, {isStatic:true});
	World.add(world, rz1body);

	rz2body = Bodies.rectangle(redzone1.x-100, redzone1.y-100, 10, 200, {isStatic:true});
	World.add(world, rz2body);

	rz3body = Bodies.rectangle(redzone1.x+100, redzone1.y-100, 10, 200, {isStatic:true});
	World.add(world, rz3body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}