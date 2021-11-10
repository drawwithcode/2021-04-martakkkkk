var msg;
var bgcolor;
var button;
var cnv;

let imgs = [];
let myColors = ["yellow", "pink", "purple"];

function preload() {
  for (var i = 0; i < 10; i++) {
    imgs[i] = loadImage("assets/img_" + i + ".jpg");
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();

  msg = createP("Clicca lo schermo per iniziare al meglio la tua giornata !");
  msg.position(windowWidth / 2.48, windowHeight / 2);

  imageMode(CENTER);

  button = createButton(":)");
  button.position(windowWidth / 2.25, windowHeight / 1.8);
  button.mousePressed(changeColor);
  button.style("color:white");
  button.style("background:red");
  button.size(200, 50);
}

function mouseClicked() {
  var index = int(random(10));
  image(imgs[index], mouseX, mouseY, 950, 500);
}

function draw() {
  background(bgcolor);
}

function changeColor() {
  //bgcolor = color(random(255));
  bgcolor = color(random(myColors));
}

function windowResized() {
  centerCanvas();
}

