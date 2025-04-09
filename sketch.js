let circleSize, posX, posY, offSet, numShapes, space;
let myColor = ['#FFAC00','#FCFF00','#8FFF00,','#00FF4A','#00FFEE','#FFAC00','#FCFF00','#8FFF00,','#00FF4A','#00FFEE'];

function setup() 
{
  createCanvas(400, 400);  

  numShapes = 10;
  circleSize = width-50;
  space = circleSize/numShapes;
  offSet = 10;
  
  posX = width/2;
  posY = height/2;
  
}

function draw()
{
  background(79,97,78);
  for (i = 0; i <10; i++)
    {
      fill(myColor[i]);
      strokeWeight(4);
      stroke('brown');
      circle(posX+offSet*i,posY,circleSize-space*i);
    }
  mysignature();
}

function mysignature()
{
  textSize(20);
  strokeWeight(4);
  stroke('red');
  fill('orange');
  text('Woody Mo', width-120, height - 30);
}
