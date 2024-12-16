function setup() {
  createCanvas(1200,1000);
  background(96);
  noFill();
  angleMode(DEGREES);
}

function draw() {

//daria equal triangle
{
push();
stroke(255, 0, 0);
strokeWeight(3);
  darEqualTri(100, 75, 100, 0);
  point(100,75);
fill(255);
  darEqualTri(225, 75, 100, 0);
  point(225,75);
pop();
  }

//lyndon equal triangle
{
  push();
  stroke(0, 0, 255);
  strokeWeight(3);
    lynTriEqual(350, 100, 100, 0);
    point(350,100);
  fill(255,0,0);
    lynTriEqual(475, 100, 100, 0);
  fill(0,255,0);
    lynTriEqual(600, 100, 100);
  fill(0,0,255);
    lynTriEqual(725, 100, 100);
  point(475,100);
  pop();
  }

//lyndon right triangle
{
  push();
  stroke(0, 0, 255);
  strokeWeight(3);
    lynTriRight(350, 200, 1, 1, 100, 0);
    point(350,200);
  fill(255,0,0);
    lynTriRight(475, 200, 1, 1, 100, 0);
  fill(0,255,0);
    lynTriRight(600, 200, 1, 3, 100);
  fill(0,0,255);
    lynTriRight(725, 200, 1);
  fill(0,255,255);
    lynTriRight(850, 200, 1,20);
    point(475,200);
  pop();
  }

//lyndon isosceles triangle
{
  push();
  stroke(0, 0, 255);
  strokeWeight(3);
    lynTriIsosceles(350, 300, 1, 1, 100, 0);
    point(350,300);
  fill(255,0,0);
    lynTriIsosceles(475, 300, 1, 1, 100, 0);
  fill(0,255,0);
    lynTriIsosceles(600, 300, 1, 1, 100);
  fill(0,0,255);
    lynTriIsosceles(725, 300, 1, 1, 100, 0);
  fill(255,0,255);
    lynTriIsosceles(850, 300, 1, 1, 100, 0);
  fill(255,255,0);
    lynTriIsosceles(975, 300, 1, 1, 100, 0);
  point(475,300);
  pop();
  }

//lyndon hexagon
{
push();
 strokeWeight(.5);
 stroke(239,13,103);
  lynHex(150, 250, 100, 0);
 stroke(255, 0, 0);
  lynHex(150, 250, 100, 15);
 stroke(0, 255, 0);
  lynHex(150, 250, 100, 30);
 stroke(0, 0, 255);
  lynHex(150, 250, 100, 45);
 pop();
  }

}

//Equilateral - Daria method
function darEqualTri(lx, ly, sc, r){
  let x1 = -(sc * 0.5);
  let x2 = sc * 0.5;
  let x3 = 0;
  let y1 = -(sc * Math.sqrt(0.75) / 3);
  let y2 = -(sc * Math.sqrt(0.75) / 3)
  let y3 = sc / Math.sqrt(3);

  push();
  translate(lx, ly);
  rotate(r);
  triangle(x1, y1, x2, y2, x3, y3);
  pop();
}

//Equilateral - Lyndon method
function lynTriEqual(lx, ly, sc, r){
  //let side = sc;
  let s2 = sc/2;
  let long = sc / Math.sqrt(3);
  let small = (Math.sqrt(0.75)/3) * sc;

  let x1 = -s2;
  let x2 = 0;
  let x3 = s2;
  let y1 = small;
  let y2 = -long;
  let y3 = small;

  push();
   translate(lx, ly);
   rotate(r);
    triangle(x1, y1, x2, y2, x3, y3);
  pop();
}

//Right - Lyndon
function lynTriRight(lx, ly, s1, s2, sc, r){

  let s = (Math.sqrt(0.75)/3)
  let l = s * 2

  let x1 = -l*sc*s1
  let x2 = s*sc
  let x3 = s*sc
  let y1 = s*sc*s2
  let y2 = s*sc*s2
  let y3 = -l*sc*s2

  push();
   translate(lx, ly);
   rotate(r);
    triangle(x1, x2, x3, y1, y2, y3);
  pop();
}
//Isosceles - Lyndon
function lynTriIsosceles(lx, ly, s1, s2, sc, r){

  let s = (Math.sqrt(0.75)/3)
  let l = s * 2

  let x1 = -s1/2*sc
  let x2 = s1/2*sc
  let x3 = 0
  let y1 = s*sc
  let y3 = -s2*l*sc

  push();
   translate(lx, ly);
   rotate(r);
    triangle(x1, y1, x2, y1, x3, y3)
  pop();
}

//Hexagon - Lyndon
function lynHex(lx, ly, sc, r){

  let y1 = Math.sqrt(0.75)*sc;
  
  push();
   translate(lx, ly);
   rotate(r);
    line(-sc/2, -y1, sc/2, -y1);
    line(sc/2, -y1, sc, 0);
    line(sc, 0, sc/2, y1);
    line(sc/2, y1, -sc/2, y1);
    line(-sc/2, y1, -sc, 0);
    line(-sc, 0, -sc/2, -y1);
  pop();   

  let b1 = (y1/3);
  let f = (255,64,128);

push();
 translate(lx, ly);
 rotate(r); 
  fill(f);
noStroke();
lynTriEqual( 0, y1-b1, 100, 0);
lynTriEqual( -sc/2, -b1, 100, 0);
lynTriEqual( sc/2, -b1, 100, 0);

lynTriEqual( 0, -y1+b1, 100, 180);
lynTriEqual( -sc/2, b1, 100, 180);
lynTriEqual( sc/2, b1, 100, 180);
pop();


}