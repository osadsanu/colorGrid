function Box (x,y,size,H,S,B,vel){
  this.x=x;
  this.y=y;
  this.c_hue=H;
  this.c_sat=S;
  this.c_bri=B;
  this.size=size;
  this.increment=1;
  this.vel=vel;
  this.addHueVal = function (){
    this.increment *= (this.c_hue>360-(abs(this.vel)) || this.c_hue<1+(abs(this.vel))) ? -1:1;
    this.c_hue+=(this.increment * this.vel);
  }
  this.addSatVal = function (){
    this.increment *= (this.c_sat>99-(abs(this.vel)) || this.c_sat<1+(abs(this.vel))) ? -1:1;
    this.c_sat+=(this.increment * this.vel);
  }
  this.addBriVal = function (){
    this.increment *= (this.c_bri>115-(abs(this.vel)) || this.c_bri<45+(abs(this.vel))) ? -1:1;
    this.c_bri+=(this.increment * this.vel);
  }
  this.drawBox = function(){
    fill(this.c_hue,this.c_sat,this.c_bri);
    rect(this.x,this.y,this.size,this.size);
  }
}
var grid = [];
function setup() {
  colorMode(HSB, 360,100,100);
  createCanvas(1000,400);
  //noStroke();
  stroke(3);
  size=70;
  var max_X= floor (width/size);
  var max_Y= floor (height/size);
  console.log(max_X);
  for(var x=0; x<max_X;x++){
    for(var y=0;y<max_Y;y++){
      grid.push(new Box(x*size,y*size,size,212,100,random(48,60),random(-1.5,1.5)));
    }
  }
}
function draw() {
  for(var i = 0; i<grid.length;i++){
    grid[i].drawBox();
    grid[i].addBriVal();
  }
}