// Vanessa Méndez Palacios A01639925
// Challenge 4 - Polygons drawing with OpenGL

count = 5;

function polygon(x, y, radius, npoints, transform, ...params) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let i = 0; i < TWO_PI; i += angle) {
    let sx = x + cos(i) * radius;
    let sy = y + sin(i) * radius;
    if (transform != null) {
      [sx, sy] = transform(sx,sy,...params);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function mouseClicked() {
  count = count + 1;
  fill(random(0,255), random(0,255), random(0,255));
}

function setup() {
  createCanvas(500, 500);
  fill(random(0,255), random(0,255), random(0,255));
}

function draw() {
  background(0);
  polygon(width/2, height/2, 250, count, null);
  if (count == 13) {
    count = 5;
  }
}