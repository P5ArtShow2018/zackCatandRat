var mouse_x = 0
var mouse_y = 0
var cat_x = undefined
var cat_y = undefined
var mouse_w = 50
var mouse_h = 50
var cat_w = 75
var cat_h = 75


function preload() {
  cat = loadImage('Laufend2.png');
  mouse = loadImage('running-mouse-lrg-1.png');
  cat_s = loadSound('Cat-meows-sound.mp3');
  mouse_s = loadSound('Field Rat.mp3 ');
  Yugi = loadSound('duel.mp3');
}

function setup() {
createCanvas(windowWidth,windowHeight);
frameRate(150);

}

function draw() {
  cat_x = mouseX
  cat_y = mouseY
  background(170,30,140);
  image(cat,cat_x,cat_y);
  //imageMode(CENTER);
  cat.resize(cat_w,cat_h);
  image(mouse,mouse_x,mouse_y);
  mouse.resize(mouse_w,mouse_h);
  noCursor();
if (keyIsDown(UP_ARROW)) {
  mouse_y -= 7;
}
if(keyIsDown(DOWN_ARROW)){
  mouse_y += 7;
}
if(keyIsDown(RIGHT_ARROW)){
  mouse_x += 7;
}
if(keyIsDown(LEFT_ARROW)){
  mouse_x -= 7;
}
  
}

function mousePressed(){
  // rect1 is cat rect 2 is mouse
  
if(cat_x < mouse_x + mouse_w && cat_x + cat_w > mouse_x && cat_y < mouse_y + mouse_h && cat_h + cat_y > mouse_y) {
  //background(170,30,140);
  textSize(50);
  //text("cat wins",width / 2, height / 2);
  alert("cat wins");
}
else {
  alert("mouse wins");
}

}