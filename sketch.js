let tam;
function setup() {
  createCanvas(400, 400);
  background(220);
}
function draw() {
  if(mouseIsPressed){
  fill(mouseX,mouseY,mouseX*mouseY);
  tam=((mouseX/4)-50);
  stroke(mouseY, mouseX, mouseY/mouseX)
  circle(mouseX, mouseY, tam);
 
  }
}
