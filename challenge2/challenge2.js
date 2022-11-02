// Vanessa Méndez Palacios A01639925
// Challenge 2 - Lines drawing algorithm with Processing

function setup() {
    createCanvas(400, 400);
}
  
function draw() {
background(220);
linea(1,2,100,20)
linea(10,200,50,10)
linea(300,300,10,10)
linea(200,300,250,50)
linea(350,350,100,300)
}
  
let linea = (x1, y1, x2, y2) => {

    let x, y, dx, dy, dx1, dy1, px, py, ex, ey, i;

    dx = x2 - x1;
    dy = y2 - y1;

    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);

    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;

    if (dy1 <= dx1) {
        if (dx >= 0) {
        x = x1; y = y1; ex = x2;
        } else {
            x = x2; y = y2; ex = x1;
        }
        
        point(x, y);

        for (i = 0; x < ex; i++) {
            x = x + 1;

            if (px < 0) {
                px = px + 2 * dy1;
            } else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + 1;
                } else {
                    y = y - 1;
                }
                px = px + 2 * (dy1 - dx1);
            }

                point(x, y);
        }
    } else {
        if (dy >= 0) {
            x = x1; y = y1; ey = y2;
        } else {
            x = x2; y = y2; ey = y1;
        }
        
        point(x, y);

        for (i = 0; y < ey; i++) {
        y = y + 1;

        if (py <= 0) {
            py = py + 2 * dx1;
        } else {
            if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                x = x + 1;
            } else {
                x = x - 1;
            }
            py = py + 2 * (dx1 - dy1);
        }
        point(x, y);
        }
    }
}