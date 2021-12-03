let sphereGrid;
let sphereTexture;
let canvas;
// let button;

function preload() {
  sphereGrid = loadModel("sketches/SphereGrid.obj");
  sphereTexture = loadImage("sketches/SphereGridOverlay2.png");
  // button = createButton("Store");
  // button.position (innerWidth/2.6, innerHeight/2.75);
  // button.size (150,150);
  // button.fill (clear);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(windowWidth/2.3,windowHeight/-2.6)
  canvas.parent("#sketch");

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
}
function draw() {
  stroke(0);
  strokeWeight(0);
  background(255,3);
  //orbitControl();
  rotateX(mouseY/-100);
  rotateY(mouseX/-100);
  scale(6);
  model(sphereGrid);
  texture(sphereTexture);

  
}