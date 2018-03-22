function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  //R, G, B
  background(255,0,0);
  bloom = createGraphics(500,200);
  bloom.background(250);

  //rect
  fill(0,255,255,100);
  rect(50,50,300,300);

  //ellipse
  strokeWeight(10);
  fill(0,255,0);
  ellipse(200,200,150,150);

  //line

  stroke(255);
  noStroke();
  line(0,0,500,500);
}

var bob = 0;
var vit = 1;
var angle = 0;
var bloom;
var vitangle = 0;


function draw() {
  // put drawing code here
  //fill(random(255),random(255),random(255));
  background(200);
  rectMode(CENTER);

  push();// ouvrir une transformation

  translate(width/2,height/2);
  rotate(angle);
  rect(0,0,bob,bob);

  fill(255);
  rect(100,0,50,50);
  textSize(80);
  fill(200,100,100);
  text("Hello",0,50);
  pop();

  image(bloom,50,250);

  bob = bob + vit;
  angle = angle + vitangle

  if(bob > width/2){
    vitangle = - 0.1;
    vit = -2;
  }
  else if (bob < 100) {
    vitangle = 0.1;
    vit = 2;
  }
}
