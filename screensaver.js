// Original code by Owen Roberts

var x = 20;
var y = 10;

var xupdate = 5;
var yupdate = 2;

function setup() { 
   createCanvas(640, 480);
  background('black');
}

function draw() {
   //background(150);
    
    circle(x, y, 4, 67);
    x += xupdate;
		y += yupdate;

    if (x > width || x <= 0) {
      xupdate *= -1;
    }
	
		if (y > height || y <= 0) {
			yupdate *= -1;
		}

}