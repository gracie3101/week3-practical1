
let fillColour;
let move = 5;
let x = 300;
let y = 300;
let distFromCentre = 250;

function setup () {
    createCanvas(600,600)
    fillColour = colour(random(255), random(255), random(255));
    fill(fillColour);
    nosStroke();
}

function draw() {
    background(255);
    triangle(x, y - distFromCentre, x + distFromCentre, y + distFromCentre, x - distFromCentre, y + distFromCentre);

   
  }
  function keyPressed() {
    if (key === 'UP_ARROW') {
      y -= move;

    } else if (key === 'DOWM_ARROW') {
      y += move;

    } else if (key === 'LEFT_ARROW') {
      x -= move;

    } else if (key === 'RIGHT_ARROW') {
      x += move;
    }
  }