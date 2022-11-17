// Vanessa Méndez Palacios A01639925
// Challenge 5 - Transformations

function setup() {
    createCanvas(640, 480);
}

function myTranslate(x, y, tx, ty) {
    newX = x + tx;
    newY = y + ty;
    return [newX, newY];
}

function myRotate(x, y, angle) {
    rotate(radians(angle));
    return[x, y];
}

function myRotatePiv(x, y, angle, pivX, pivY) {
    translate(pivX, pivY);
    rotate(radians(angle));
    newX = pivX + ((x - pivX) * cos(angle)) - ((y - pivY) * sin(angle))
    newY = pivY + ((x - pivX) * sin(angle)) + ((y - pivY) * cos(angle))
    return [newX, newY];
}

function myScale(x, y, sX, sY) {
    nX = x * sX 
    nY = y * sY 
    return [nX, nY];
}

function myReflection(x, y, tx, ty) {
    newX = x +tx* -1;
    newY = y +ty* -1;
    return [newX, newY];
}

function myShearX(x, y) {
    return [x, y];
}

function myShearY(x, y) {
    return [x, y];
}

function draw() {
    background(0);
    fill(255);
    polygon(width/2, height/2, 50, 6, null);
    fill(100);
    polygon(width/2, height/2, 50, 6, myTranslate, 250, 130);
    fill(50, 100, 150);
    polygon(width/2, height/2, 50, 6, myRotate, 55);
    fill(1, 200, 200);
    strokeWeight(1);
    polygon(width/2, height/2, 50, 6, myRotatePiv, 50, 50, 50);
    fill(30, 100, 50);
    polygon(50, 100, 50, 6, myScale, 1.5, 1.5);
    fill(100, 50, 100);
    polygon(width/2, height/2, 50, 6, myReflection, 50, 50);
}

function polygon(x, y, radius, npoints, transform, ...params) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        
        if (transform != null) {
            [sx, sy] = transform(sx,sy, ...params);
        }

        vertex(sx, sy);
    }
    endShape(CLOSE);
}