// Vanessa Méndez Palacios A01639925
// Challenge 6 - Dynamic curves drawing

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
let x4 = 0;
let y4 = 0;
let d1 = false;
let d2 = false;
let d4 = false;
let d3 = false;
let d5 = false;
let count = 0;
let allClicks = false;

function setup() {
  createCanvas(500, 500);
}

function mousePressed() {
  if(count == 0){
    x2 = mouseX;
    y2 = mouseY;
  }
  if(count == 1){
    x3 = mouseX;
    y3 = mouseY;
  }if(count == 2){
    x1 = mouseX;
    y1 = mouseY;
  }
  if(count == 3){
    x4 = mouseX;
    y4 = mouseY;
    allClicks = true;
  }
  count = count + 1;
  //fill(value);
  //line(x1, y1, x2, y2);
}

function mouseReleased() {
  x2 = mouseX;
  y2 = mouseY;
}

function draw() {
  background(255);
  textSize(10);
  fill(0, 102, 153);
  stroke(0);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);
  noStroke();
  fill(255, 0, 0);
  ellipse(x1, y1, 10, 10);
  fill(0, 0, 255, 192);
  ellipse(x3, y3, 10, 10);
  ellipse(x2, y2, 10, 10);
  fill(255, 0, 0);
  ellipse(x4, y4, 10, 10);

  noStroke();
  text('(' + x1 + ',' + y1 + ')', x1, y1);
  text('(' + x2 + ',' + y2 + ')', x2, y2);
  text('(' + x3 + ',' + y3 + ')', x3, y3);
  text('(' + x4 + ',' + y4 + ')', x4, y4);

  if (d1) {
    x1 = mouseX;
    y1 = mouseY;
  }
  if (d2) {
    x2 = mouseX;
    y2 = mouseY;
  }
  if (d3) {
    x3 = mouseX;
    y3 = mouseY;
  }
  if (d4) {
    x4 = mouseX;
    y4 = mouseY;
  }
}

function mouseDragged() {
  if (dist(mouseX, mouseY, x1, y1) < 10) {
    d1 = true;
  }
  if (dist(mouseX, mouseY, x2, y2) < 10) {
    d2 = true;
  }
  if (dist(mouseX, mouseY, x3, y3) < 10) {
    d3 = true;
  }
  if (dist(mouseX, mouseY, x4, y4) < 10) {
    d4 = true;
  }
}

function mouseReleased() {
  d1 = false;
  d2 = false;
  d3 = false;
  d4 = false;
  d5 = false;
}