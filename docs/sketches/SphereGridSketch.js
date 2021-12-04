let sphereGrid;
let sphereTexture;
let canvas;

// let button

// DOUG: I created this function to calculate the size the canvas should be based on how large the screen is, with some constraints
function getCanvasSize() {
  const UPPER_CANVAS_SIZE = 500; // the largest the canvas could possibly be (change this if you want)
  const LOWER_CANVAS_SIZE = 80; // the smallest the canvas could possibly be (change this if you want)

  // DOUG: as you stretch or shrink the page, the size of the sphere will grow or shrink between
  // a screen size of 1112px (I took this number from your media query in your CSS) and 2560px
  return map(innerWidth, 1112, 2560, LOWER_CANVAS_SIZE, UPPER_CANVAS_SIZE, true);
}

function preload() {
  sphereGrid = loadModel("sketches/SphereGrid.obj");
  sphereTexture = loadImage("sketches/SphereGridtexture2.png");
  // button = createButton("Store");
  // button.position (innerWidth/2.6, innerHeight/2.75);
  // button.size (150,150);
  // button.fill (clear);
}

function setup() {
  let canvasSize = getCanvasSize(); // DOUG: setting the canvas size using the function above
  canvas = createCanvas(canvasSize, canvasSize, WEBGL); 
  canvas.parent("#sketch");
}

function windowResized() {
    let newSize = getCanvasSize();
    resizeCanvas(newSize, newSize);
    background(0);
}

function draw() {
  stroke(0);
  strokeWeight(0);
  background(0);
  //orbitControl();
  rotateX(mouseY/-100);
  rotateY(mouseX/-100);

  // DOUG: I figured out the radius of the sphere is ~22px by setting its scale to 1
  // and seeing at what point it started getting cut off by the canvas.
  const SPHERE_DIAMETER = 22.25;

  // DOUG: by dividing the canvas size by the sphere's diameter, we can find a scale value
  // that will always make the sphere exactly as large as the canvas
  let newScale = getCanvasSize()/SPHERE_DIAMETER; 
  scale(newScale); // scale the sphere with the new scale value
  model(sphereGrid);
  texture(sphereTexture);
}