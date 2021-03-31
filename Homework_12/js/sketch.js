// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
var shape2X = 100;
var shape2Y = 130;
var shape2XSpeed;
var shape2YSpeed;


// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(225,204,229);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-60)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();
    characterLeft();

    // potential enemy
    drawShape();
    shapeMovement();
    shapeBounds();

    // create the shape based on the mouse click
    shapeClicked();

}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}
function createCharacter(x,y)
{
    //character
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(225,102,102);
    circle(characterX,characterY,25);
}

function drawShape()
{
  fill(255,255,153);
  // draw the shape
  circle(shapeX, shapeY, 10);
  fill(204,255,153);
  // draw the shape
  circle(shape2X, shape2Y, 20);
}

function shapeMovement()
{
      // move the object
      shapeX += shapeXSpeed;
      shapeY += shapeYSpeed;
      shape2X += shape2XSpeed;
      shape2Y += shape2YSpeed;
}

function shapeBounds()
{
      // check to see if the shape has gone out of bounds
      if(shapeX > width)
      {
          shapeX = 0;
      }
      if(shapeX < 0)
      {
          shapeX = width;
      }
      if(shapeY > height)
      {
          shapeY = 0;
      }
      if(shapeY < 0)
      {
          shapeY = height;
      }
      if(shape2X > width)
      {
          shape2X = 0;
      }
      if(shape2X < 0)
      {
          shape2X = width;
      }
      if(shape2Y > height)
      {
          shape2Y = 0;
      }
      if(shape2Y < 0)
      {
          shape2Y = height;
      }
}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

function characterLeft()
{
// check to see if the character has left the exit
if(characterX > width && characterY > width-50)
{
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", width/3-50, height/1-50);
 }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function shapeClicked()
{
  fill(153,0,76);
  circle(mouseShapeX, mouseShapeY, 25);
}

/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    }
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */
