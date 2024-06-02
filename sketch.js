let img2;
let img3;
let menu;
let xwall1 = 0;
let xwall2 = 649;
let xst1 = 70;
let xst2 = 160;
let xst3 = 260;
let xst4 = 360;
let xst5 = 460;
let xst6 = 560;
let xst7 = 660;
let xst8 = 760;
let sw = 2;
let transx = 70;
let transy = 327;
let xball = transx - 110;
let yball = transy - 367;
let sxball = 10;
let syball = 5;
let tp = 0;
let xrackt1 = 630;
let yrackt1 = 180;
let xrackt2 = 730;
let yrackt2 = 380;
let xrackt3 = 730;
let yrackt3 = -80;
let sr = 5;

//Screen Sizes
function setup(){
  createCanvas(600,400);
}

//Load in the image
function preload(){
  img2 = loadImage("wall.jpg");
  img3 = loadImage("fball.png");
}

//Gameplay
function draw(){

  background(0);
  wall();
  setting();
  movesetting();
  goalpost ();
  ball();
  speed();
  crachpost ();
}

//Functions in to the game
function ball(){
  rectMode(CENTER);
  translate(transx, transy);
  let angle = frameCount * 0.04;
  rotate(angle);
  image (img3,xball,yball,80,80);
if (keyIsDown(UP_ARROW)){
  transy -=10;
}
if (keyIsDown(DOWN_ARROW)){
  transx+= sxball;
  transy += syball;
}
  if (keyIsDown(RIGHT_ARROW)){
  transx+= syball;
  transy -=5;
}
    if (keyIsDown(LEFT_ARROW)){
  if (transx != 70 && transy != 327){
      transx = 70;
      transy = 327;
      tp -=1;
  }
}
  if (transx > 600){    
  transx = 70;
  transy = 327;
  tp +=10
  }
  if (transy > height || transy < 0){
  transx = 70;
  transy = 327;
  tp -=5;
  }
}

function wall(){
  noStroke();
  image (img2,xwall1,0,665,360);
  image (img2,xwall2,0,665,360);
  // function score fixed in the wall
  if (tp <0){
    tp = 0;
  }
  fill (0,255,0);
  textSize (30);
  textStyle(BOLD);
  textFont('fontItalic');
  text ("SCORE",25,30)
  text (tp,150,30);
}

function setting(){
  fill (220)
  strokeWeight(4);
  stroke(51);
  rect (xst1,380,110,40);
  rect (xst2,380,110,40);
  rect (xst3,380,110,40);
  rect (xst4,380,110,40);
  rect (xst5,380,110,40);
  rect (xst6,380,110,40);
  rect (xst7,380,110,40);
  rect (xst8,380,110,40);
}

function movesettingRIGHT(){
  xwall1 -= sw * 1.5;
  xwall2 -= sw * 1.5;
  xst1 -= sw * 1.5;
  xst2 -= sw * 1.5;
  xst3 -= sw * 1.5;
  xst4 -= sw * 1.5;
  xst5 -= sw * 1.5;
  xst6 -= sw * 1.5;
  xst7 -= sw * 1.5;
  xst8 -= sw * 1.5;
  xrackt1 -= sw * 1.5;
  xrackt2 -= sw * 1.5;
  xrackt3 -= sw * 1.5;
  if (xwall1 <-650){
    xwall1 = 650;
  }
    if (xwall2 < -650){
    xwall2 = 650;
  }
  if (xst1 < -110){
    xst1 = 660;
  }
    if (xst2 < -110){
    xst2 = 660;
  }
    if (xst3 < -110){
    xst3 = 660;
  }
    if (xst4 < -110){
    xst4 = 660;
  }
    if (xst5 < -110){
    xst5 = 660;
  }
    if (xst6 < -110){
    xst6 = 660;
  }
    if (xst7 < -110){
    xst7 = 660;
  }
    if (xst8 < -110){
    xst8 = 660;
  }
}

function speed(){
    if (keyIsPressed === true){
    if (key === 'z')
  movesettingRIGHT ();
  }
}

function movesetting(){
  xwall1 -= sw;
  xwall2 -= sw;
  xst1 -= sw;
  xst2 -= sw;
  xst3 -= sw;
  xst4 -= sw;
  xst5 -= sw;
  xst6 -= sw;
  xst7 -= sw;
  xst8 -= sw;
  if (xwall1 <-650){
    xwall1 = 650;
  }
    if (xwall2 < -650){
    xwall2 = 650;
  }
  if (xst1 < -110){
    xst1 = 660;
  }
    if (xst2 < -110){
    xst2 = 660;
  }
    if (xst3 < -110){
    xst3 = 660;
  }
    if (xst4 < -110){
    xst4 = 660;
  }
    if (xst5 < -110){
    xst5 = 660;
  }
    if (xst6 < -110){
    xst6 = 660;
  }
    if (xst7 < -110){
    xst7 = 660;
  }
    if (xst8 < -110){
    xst8 = 660;
  }
}
function goalpost (){
  fill (220,20,60);
  stroke(255, 204, 0);
  rect (xrackt1,yrackt1,13,80);
  rect (xrackt2,yrackt2,13,80);
  rect (xrackt3,yrackt3,13,80);
  xrackt1 -= sw;
  xrackt2 -= sw;
  xrackt3 -= sw;
  yrackt1 -= sr;
  yrackt2 -= sr;
  yrackt3 -= sr;
  if (yrackt1 > height || yrackt1 < 0){
    sr *= -1;
  }
  if (xrackt1 < 130){
    xrackt1 = 630;
  }
    if (xrackt2 < 130){
    xrackt2 = 630;
  }
    if (xrackt3 < 130){
    xrackt3 = 630;
  }
}
function crachpost (){

}