const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block1;
var polygon, slingShot;
var backgroundImg;

var bg = "bg1.png";

var score = 0;

function preload(){
    getBackgroundImg();
}

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(50, 200);

    slingShot = new Slingshot(polygon.body, {x:100, y:200});

    ground = new Ground(400,240,800,20);

    block1 = new Block(330,235,30,30);
    block2 = new Block(360,235,30,30);
    block3 = new Block(390,235,30,30);
    block4 = new Block(420,235,30,30);
    block5 = new Block(450,235,30,30);

    block6 = new Block(360,195,30,30);
    block7 = new Block(390,195,30,30);
    block8 = new Block(420,195,30,30);

    block9 = new Block(390,155,30,30);
}
function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);

    
    polygon.display();

    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    
    
    slingShot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32 && polygon.body.speed <= 1){
        Matter.Body.setPosition(polygon.body, {x:200, y:50});
        slingShot.attach(polygon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(hour);
}