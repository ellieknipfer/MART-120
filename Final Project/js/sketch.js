// where bezier starts
var startX;
var startY;

// where bezier ends
var endX;
var endY;

// create a speed for how much startx will change each time
var speedStartX;
var speedStartY;
var speedEndX;
var speedEndY;

var r;
var g;
var b;

function setup() {
  createCanvas(400, 600);

  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);

  const range = 6;
  speedStartX = random(-range, range);
  speedStartY = random(-range, range);
  speedEndX = random(-range, range);
  speedEndY = random(-range, range);

  r = random(255);
  g = random(255);
  b = random(255);

  noFill();
  background(225,204,229);
}

function draw() {

  // draw a bezier
  stroke(r, g, b, 80);
  bezier(0, 0, startX, startY, endX, endY, width, height);

  // change the color
  r += random(-10, 10);
  g += random(-9, 9);
  b += random(-9, 9);

  // Constrain RGB to make sure they are within 0-255 color range
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  // move start x and y by speed start x and y
  startX += speedStartX;
  startY += speedStartY;
  endX += speedEndX;
  endY += speedEndY;


  if(startX < 0 || startX > width){
    speedStartX *= -1;
  }

  if(startY < 0 || startY > height){
    speedStartY *= -1;
  }

  if(endX < 0 || endX > width){
    speedEndX *= -1;
  }

  if(endY < 0 || endY > height){
    speedEndY *= -1;
  }
}
