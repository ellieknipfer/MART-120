function setup()
{
  createCanvas(500, 600);
}

function draw()
{
  background(225,153,153);
  noStroke();
  textSize(22);
  fill(120);
  text("Hello, World!", 20, 80);
  textSize(15);
  text("Ellie Knipfer", 310, 565);

  //Hair
  noStroke();
  fill(77, 55, 12);
  arc(260, 290, 310, 450, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Face
  noStroke();
  fill(245, 218, 183);
  ellipse(260, 255, 200, 260);

  //Ears
  arc(150, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN);

  //Bang
  noStroke();
  fill(77, 55, 12);
  arc(290, 160, 180, 105, 0, PI + QUARTER_PI, CHORD);

  //Eyebrows
  stroke(77, 55, 12);
  strokeWeight(3);
  noFill();
  arc(210, 235, 55, 15, PI, TWO_PI, OPEN);
  arc(310, 235, 55, 15, PI, TWO_PI, OPEN);

  //Eyes
  strokeWeight(1);
  fill(46, 161, 210);
  ellipse(210, 260, 28, 25);
  ellipse(310, 260, 28, 25);

  //Eyeballs
  noStroke();
  fill(255);
  ellipse(207, 252, 8, 8);
  ellipse(306, 252, 8, 8);

  //Nose
  fill(245, 212, 170);
  triangle(260, 270, 270, 300, 250, 300);

  //Hoodie
  rectMode(CENTER);
  fill(198, 198, 198);
  rect(260, 470, 205, 150, 20);
  fill(189, 189, 189);
  triangle(135, 435, 170, 360, 330, 470);
  triangle(360, 380, 390, 460, 200, 435);
  fill(255);
  ellipse(300, 432, 15, 15);
  ellipse(220, 432, 15, 15);
  rect(300, 460, 8, 65, 20);
  rect(220, 460, 8, 65, 20);

  //Neck
  fill(245, 218, 183);
  rect(260, 380, 50, 55, 20);

  //Mouth
  fill(255, 102, 102);
  arc(260, 325, 49, 35, 0, PI);
  stroke(225);
  strokeWeight(3);
  line(239, 331, 281, 331);

}
