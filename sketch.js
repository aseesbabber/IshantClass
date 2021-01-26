const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-150);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(width/2,height-10,width,30)
    platform = new Ground(  200, height-140,400, 250);
    box1 = new Box(700,height-70,70,70);
    box2 = new Box(920,height-70,70,70);
    pig1 = new Pig(810, height-70);
    log1 = new Log(810,height-130,300, PI/2);

    box3 = new Box(700,height-180,70,70);
    box4 = new Box(920,height-180,70,70);
    pig3 = new Pig(810, height-180);

    log3 =  new Log(810,height-220,300, PI/2);

    box5 = new Box(810,height-280,70,70);
    log4 = new Log(760,height-280,150, PI/7);
    log5 = new Log(870,height-280,150, -PI/7);

    bird = new Bird(100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    platform.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}
