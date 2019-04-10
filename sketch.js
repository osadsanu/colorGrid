//Each individual box contains its own position, size, color, and velocity.
function Box (x,y,size,H,S,B,vel){
  this.x=x;
  this.y=y;
  this.c_hue=H;
  this.c_sat=S;
  this.c_bri=B;
  this.size=size;
  this.increment=1; //Accelerates or slows the valocity value
  this.vel=vel;

  //Generates the animations for each color component in order to modify the animation behavior
  //change the conditional values.

  //Modifies and bounce the hue value.
  this.addHueVal = function (){
    this.increment *= (this.c_hue>360-(abs(this.vel)) || this.c_hue<1+(abs(this.vel))) ? -1:1;
    this.c_hue+=(this.increment * this.vel);
  }
  //Modifies and bounce the Saturation value.
  this.addSatVal = function (){
    this.increment *= (this.c_sat>99-(abs(this.vel)) || this.c_sat<1+(abs(this.vel))) ? -1:1;
    this.c_sat+=(this.increment * this.vel);
  }
  //Modifies and bounce the Bright value.
  this.addBriVal = function (){
    this.increment *= (this.c_bri>115-(abs(this.vel)) || this.c_bri<35+(abs(this.vel))) ? -1:1;
    this.c_bri+=(this.increment * this.vel);
  }
  //Update color of the box on the canvas.
  this.drawBox = function(){
    //Select the color
    fill(this.c_hue,this.c_sat,this.c_bri);
    //Draw a rectangle... it's possible to use circles too 🤔💁‍♂️
    rect(this.x,this.y,this.size,this.size);
  }
}

var grid = [];
function setup() {
  colorMode(HSB, 360,100,100);
  createCanvas(1000,400);
  //noStroke();
  //The line between each box
  stroke(3);
  //the size of each box
  size=70;
  // get the aspect ratio in order to ensure only boxes and no rectangles
  var max_X= floor (width/size);
  var max_Y= floor (height/size);
  //Create all boxes in memory
  for(var x=0; x<max_X;x++){
    for(var y=0;y<max_Y;y++){
      grid.push(new Box(x*size,y*size,size,209,63,random(40,50),random(-1.5,1.5)));
    }
  }
}
function draw() {
  //update all boxes color
  for(var i = 0; i<grid.length;i++){
    grid[i].addBriVal();
    grid[i].drawBox();
  }
}