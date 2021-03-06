var data1;
var data2;

var musique1 = [];
var musique2 = [];

var re1;
var mi1;
var fa1;
var sol1;
var la1;
var si1;
var d01;
var re2;
var mi2;
var fa2;

var re1g;
var mi1g;
var fa1g;
var sol1g;
var la1g;
var si1g;
var d01g;
var re2g;
var mi2g;
var fa2g;

var difference;
var pas;

var min;
var max;

var step1;
var step2;
var step3;
var step4;
var step5;
var step6;
var step7;
var step8;
var step9;
var step10;

var timer = 0;
var temps = 1;
var hauteur1 = 0;
var hauteur2 = 0;

function preload(){
  data1 = loadJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=2RXTKS0JWT1SIIM6&outputsize=compact");
  data2 = loadJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=2RXTKS0JWT1SIIM6&outputsize=compact");

  
  re1 = loadSound('song/re1.wav');
  mi1 = loadSound('song/mi1.wav');
  fa1 = loadSound('song/fa1.wav');
  sol1 = loadSound('song/sol1.wav');
  la1 = loadSound('song/la1.wav');
  si1 = loadSound('song/si1.wav');
  d01 = loadSound('song/do1.wav');
  re2 = loadSound('song/re2.wav');
  mi2 = loadSound('song/mi2.wav');
  fa2 = loadSound('song/fa2.wav');
  
  re1g = loadSound('song/re1g.wav');
  mi1g = loadSound('song/mi1g.wav');
  fa1g = loadSound('song/fa1g.wav');
  sol1g = loadSound('song/sol1g.wav');
  la1g = loadSound('song/la1g.wav');
  si1g = loadSound('song/si1g.wav');
  d01g = loadSound('song/do1g.wav');
  re2g = loadSound('song/re2g.wav');
  mi2g = loadSound('song/mi2g.wav');
  fa2g = loadSound('song/fa2g.wav');
  
}

function setup() {
  
  createCanvas(1000,400);
  background(200);

  line(0,66,1000,66);
  line(0,132,1000,132);
  line(0,198,1000,198);
  line(0,264,1000,264);
  line(0,330,1000,330);
  var i = 0;
  
  for (var key1 in data1["Time Series (Daily)"])
  {
    musique1[i] = parseInt(data1["Time Series (Daily)"][key1]["6. volume"],10);
    i++;
  }
  
  var i = 0;
  
  for (var key2 in data2["Time Series (Daily)"])
  {
    musique2[i] = parseInt(data2["Time Series (Daily)"][key2]["6. volume"],10);
    i++;
  }
  
  console.log(musique1);
  console.log(musique2);

  min = Math.min(...musique1);
  max = Math.max(...musique1);
  difference = max-min;
  pas = Math.round(difference / 10);
  step1 = min+pas;
  step2 = step1+pas;
  step3 = step2+pas;
  step4 = step3+pas;  
  step5 = step4+pas;
  step6 = step5+pas;
  step7 = step6+pas;
  step8 = step7+pas;
  step9 = step8+pas;
  step10 = step9+pas;
  
}

var bob = 0;
var vit = 1;
var angle = 0;
var bloom;
var vitangle = 0;

var i = 0;
var note1;







function draw() {


//  mySound.setVolume(1);
//  mySound.play();
  
  note1 = musique1[i];
  note2 = musique2[i];
  timer++;
  
  if((timer%10) == 0)
  {
    playnote1();
    playnote2();
    i++;
    temps++;
  }

}

function playnote1(){
  
  var transp = 1;
    if(note1 < min)
  {
    console.log("silence = valeur < note");
    transp = 0;
  }
    
  else if(note1 >= min && note1 < step1)
  {
    re1.play();
    hauteur1 = 363;
    console.log('re1');
  }


  else if(note1 >= step1 && note1 < step2)
  {
    mi1.play();
    hauteur1 = 330;
    console.log('mi1');
  }
  
  else if(note1 >= step2 && note1 < step3)
  {
    fa1.play();
    hauteur1 = 297;
    console.log('fa1');
  }

  else if(note1 >= step3 && note1 < step4)
  {
    sol1.play();
    hauteur1 = 264;
    console.log('sol1');
  }
  else if(note1 >= step4 && note1 < step5)
  {
    la1.play();
    hauteur1 = 231;
    console.log('la1');
  }
  
  else if(note1 >= step5 && note1 < step6)
  {
    si1.play();
    hauteur1 = 198;
    console.log('si1');
  }
  
  else if(note1 >= step6 && note1 < step7)
  {
    d01.play();
    hauteur1 = 165;
    console.log('d01');
  }

  else if(note1 >= step7 && note1 < step8)
  {
    re2.play();
    hauteur1 = 132;
    console.log('re2');
  }

  else if(note1 >= step8 && note1 < step9)
  {
    mi2.play();
    hauteur1 = 99;
    console.log('mi2');
  }

  else if(note1 >= step9 && note1 < step10)
  {
    fa2.play();
    hauteur1 = 66;
    console.log('fa2');
  }
  else if(note1 > max)
  {
    transp = 0;
  }
  
  fill(0);
  ellipse(10*temps, hauteur1, transp*10, transp*10);

}

function playnote2(){
  
  var transp = 1;
    if(note2 < min)
  {
    console.log("silence = valeur < note");
    transp = 0;
  }
    
  else if(note2 >= min && note2 < step1)
  {
    re1g.play();
    hauteur2 = 363;
    console.log('re1g');
  }


  else if(note2 >= step1 && note2 < step2)
  {
    mi1g.play();
    hauteur2 = 330;
    console.log('mi1g');
  }
  
  else if(note2 >= step2 && note2 < step3)
  {
    fa1g.play();
    hauteur2 = 297;
    console.log('fa1g');
  }

  else if(note2 >= step3 && note2 < step4)
  {
    sol1g.play();
    hauteur2 = 264;
    console.log('sol1g');
  }
  else if(note2 >= step4 && note2 < step5)
  {
    la1g.play();
    hauteur2 = 231;
    console.log('la1g');
  }
  
  else if(note2 >= step5 && note2 < step6)
  {
    si1g.play();
    hauteur2 = 198;
    console.log('si1g');
  }
  
  else if(note2 >= step6 && note2 < step7)
  {
    d01g.play();
    hauteur2 = 165;
    console.log('d01g');
  }

  else if(note2 >= step7 && note2 < step8)
  {
    re2g.play();
    hauteur2 = 132;
    console.log('re2g');
  }

  else if(note2 >= step8 && note2 < step9)
  {
    mi2g.play();
    hauteur2 = 99;
    console.log('mi2g');
  }

  else if(note2 >= step9 && note2 < step10)
  {
    fa2g.play();
    hauteur2 = 66;
    console.log('fa2g');
  }
  else if(note2 > max)
  {
    transp = 0;
  }
  
    fill(255,0,0);
    ellipse(10*temps, hauteur2, transp*10, transp*10);

}

