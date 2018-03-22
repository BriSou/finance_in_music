var data;
var musique = [];

function preload(){
  data = loadJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=2RXTKS0JWT1SIIM6&outputsize=compact");
}

function setup() {
  
var i = 0;
  
for (var key1 in data["Time Series (Daily)"]){
  musique[i] = parseInt(data["Time Series (Daily)"][key1]["6. volume"],10);
  i++;
}

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

var s = 0;
var e = 33843500;



var re = 62;
var mi = 64;
var fa = 65;
var sol = 67;
var la = 69;
var si = 71;
var d0 = 72;
var re2 = 74;
var mi2 = 76;
var fa2 = 77;
var min = Math.min(...musique);
var max = Math.max(...musique);






function draw() {

/*
  if(e <= min){
    alert('silence');
}

else if(e >= 11732392 && e < 19102760)
    {
    alert('re');
}

else if(e >= 19102760 && e < 26473128)
    {
    alert('mi');
}
else if(e >= 26473128 && e < 33843496)
    {
    alert('fa');
}
else if(e >= 33843496 && e < 41213864)
    {
    alert('sol');
}

else if(e >= 41213864 && e < 48584232)
    {
    alert('la');
}
else if(e >= 48584232 && e < 55954600)
    {
    alert('si');
}
else if(e >= 55954600 && e < 63324968)
    {
    alert('d0');
}
else if(e >= 63324968 && e < 70695336)
    {
    alert('re2');
}
else if(e >= 70695336 && e < 78065704)
    {
    alert('mi2');
}
else if(e >= 78065704 && e < 85436075)
    {
    alert('fa2');
}

*/

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
