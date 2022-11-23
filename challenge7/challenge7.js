// Vanessa Méndez Palacios A01639925
// Challenge 7 - Bouncing-ball simulation

c = 0;
k = 0;
step = 0.01;
pct = 0.0;

function mousePressed() {
  c = c + 1;
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  noFill();
  clear();
  
  if (c == 1) {
    text("Word", 40, 240);
    background(220);
    stroke(255, 102, 0);
    bezier(120,40,320,20,320,300,330,300);
    stroke(0,0,0);
    bezier(330,300,330,94,380,58,600,40);
  }
  
  if (c == 2) {
    clear();
    background(220);
    stroke(0,0,0);
    storyboard(120,40,320,20,320,300,330,300);
    storyboard(330,300,330,94,380,58,600,40);
  }
  
  if(c == 3) {
    clear();
    background(220);
    stroke(0,0,0);
    animationn(120, 40,  320, 20,  320, 300,  330, 300);
  }
  
  if(c == 4) {
    c = 0;
  } 
}

function storyboard(x1, y1, x2, y2, x3, y3, x4, y4) {
  fill(255);
  steps = 10;
  
  for (i = 0; i <= steps; i++) {
    t = i / float(steps);
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 10, 10);
  }
}

function animationn(x1, y1, x2, y2, x3, y3, x4, y4) {
  pct = pct + step;
  
  if(pct < 1.0) {
    k = k + 1;
    steps = 60;
    t = k / float(steps);
    clear()
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);   
  }
  
  fill(250)
  ellipse(x, y, 10, 10); 
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}