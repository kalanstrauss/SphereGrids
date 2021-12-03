//easing smooths motion for things moving onscreen

let x = 1;
let w = 1;
let y = 1;
let easing = 0.01;
let colPic;
let colPic1;
let colPic2;

let canvas;

function setup() {
  canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent("#sketch");
  //colorMode(HSB,255);

  colorMode(RGB,255);
  colPic = createColorPicker("cyan"); 
  colPic1 = createColorPicker("magenta"); 
  colPic2 = createColorPicker("yellow"); 
 
  
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    background(255);
  }

function draw() {
  background(255);
  
  let targetX = mouseX;
  
  // dx == the change in x
  let dx = targetX - x;
  x += dx * easing;
  
  let targetW = mouseY;
  let dw = targetW - w;
  w += dw * easing;
  
  let targetY = mouseY
  let dy = targetY-y;
  y += dy * easing;
  
  noStroke();
  fill(colPic.color(),255);
  translate(width/2,height/2);
  ellipse(mouseX-x, mouseY-y , 300, 300);
  
  
  // fill(255,0,255,255);
  //     noStroke();
  //     ellipse(x,y,50,50);
      push(); // Start a new drawing state
      noStroke();
      fill(colPic1.color(), 255);
      translate(-width/2, -height/2);
      blendMode(MULTIPLY);
      ellipse(width/2, height/2, 300, 300); // Middle circle
      pop();
      
      push();// Restore original state
      noStroke();
      fill(colPic2.color(),255);
      translate(0,0);
      blendMode(MULTIPLY);
      ellipse(-mouseX+x, -mouseY+y, 300, 300); // Right circle
      pop();
}