var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,Object1,Object2,Object3;
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
	
   Object1Sprite=createSprite(320,600,20,120)
   Object2Sprite=createSprite(450,600,20,120)
   Object3Sprite=createSprite(385,650,110,20)
   
   
	packageSprite=createSprite(width/2, 200, 10,10,{isStatic:false});
    
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
fill("red");
rectMode(CENTER);
background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		} else if(keyCode === LEFT_ARROW){
			helicopterSprite.x=helicopterSprite.x-20;
			translate={x:-20,y:0}
			Matter.Body.translate(packageBody,translation)
        }else if(keyCode === RIGHT_ARROW){
			helicopterSprite.x=helicopterSprite.x+20;
			translate={x:20,y:0}
			Matter.Body.translate(packageBody,translation)
        
         
		}
   }




