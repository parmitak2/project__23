var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

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

	groundSprite=createSprite(width/2, height-95, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 90, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 box2 = new Box(500,550,20,100,"red");
	box3 = new Box(293,550,20,100,"red");
	box1 = new Box(400,590,200,20,"red");
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  packageSprite.y= packageBody.position.y 
  
  
  drawSprites();



if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}	
	
	box1.display();
	box2.display();
	box3.display();

  Engine.update(engine);


if(keyDown(RIGHT_ARROW)) {
	helicopterSprite.x=helicopterSprite.x+20;
	packageSprite.x= packageSprite.x+20;}

	if(keyDown(LEFT_ARROW)) {
		helicopterSprite.x=helicopterSprite.x-20;
		packageSprite.x= packageSprite.x-20;}
}