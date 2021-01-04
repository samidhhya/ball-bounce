const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var ball2,object;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var object_options={
        isStatic:true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
     object=Bodies.rectangle(100,100,20,20,object_options);
     World.add(world,object);
    var ball_options ={
        restitution: 1.0
    }
    var ball2_options={
        restitution:1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
    ball2=Bodies.circle(300,100,25,ball2_options);
    World.add(world,ball2)

    console.log(ground);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
     rect(object.position.x,object.position.y,200,20);
    ellipseMode(RADIUS);

fill ("red");
ellipse(ball.position.x, ball.position.y, 20, 20);
ellipse(ball2.position.x,ball2.position.y,20,20);
}