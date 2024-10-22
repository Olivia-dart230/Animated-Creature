let y = 0;
let speed = -2;

let x = 0;
let xSpeed = -2;


function setup() {
  createCanvas(600,600);
}

function draw() {
  background(181,233,246);
  
  //head
  noFill(),
  strokeWeight(5);
  stroke(0);
  fill(196, 37, 90);
  rect(150,100,220,150,10);
  
  
  //eyes
  fill (255);
  ellipse(170,170,60,60);
  ellipse(350,170,60,60);
  fill (0)
  ellipse(180,170,10,x,30);
  ellipse(360,170,10,x,30);
  
  //teeth
  fill(255);
  strokeWeight(1);
  triangle (230,210,210,229,240,229);
  triangle (300,210,280,229,310,229);
  
  //body
  strokeWeight (5);
  fill(196, 37, 90);
  rect(120,250,280,180,40);
  
  //arms 
  triangle(50,360,120,300,120,360);
  triangle(470,360,400,300,400,360);
  
  //mouth
  line(200,230,330,230);
  
  //legs
  rect(180,430,70,68);
  rect(250,430,70,68);
  
  //sun
  strokeWeight(2);
  fill(252,210, 58);
  ellipse (500,y,80);
  
  y = y + speed;
  console.log(y);
  
  //sun
  if (y <= - 70)
    {
      speed = - speed;
    }
  if (y >= 150)
    {
      speed = - speed;
    }
   
  //eyes
  
  x = x + xSpeed;
  console.log(x);
  if (x <= - 10)
    {
      xSpeed = - xSpeed;
    }
  if (x >= 50)
    {
      xSpeed = - xSpeed;
    }
  
  //if statement for restarting animation
 // if (y <= -50)
//    { 
 //     y = 100;
  //    }
  
  //ground
  fill(27,140,85);
  strokeWeight(0);
  rect(0,500,600,100);
  
}