let player = {x:0,y:0};
let anim = [2];
let hspeed = 0;
let vspeed = 0;

function preload(){

  anim[0] = loadImage('assets/idle.png');
  anim[1] = loadImage('assets/walk.png');
  anim[2] = loadImage('assets/test.png');

}
function setup() {
  // put setup code here
   createCanvas(800,600); 
}
let lastFrame;
function draw() {
  // put drawing code here
  
 


  let now = Date.now();
  let delta = 0;
 // console.log(lastFrame);
  if(lastFrame != undefined)delta = now - lastFrame;
 
  if(keyIsDown(LEFT_ARROW)){
    hspeed = -5    
  }
  else if(keyIsDown(RIGHT_ARROW)){
    hspeed = 5;    
  }else{
    hspeed = 0;
  }
  if(keyIsDown(UP_ARROW)){
    vspeed = -5;
  }
  else if(keyIsDown(DOWN_ARROW)){
    vspeed = 5;
  }else{
    vspeed = 0;
  }
  if(vspeed != 0 || hspeed != 0){
    player.x += hspeed;
    player.y += vspeed;    
    
    let sc = abs(hspeed) / hspeed;
    
    blit(anim[1],player.x , player.y, 77,118, 16, 6, 30, delta);//walk animation from spritesheet
    flip();//TODO create image flip function.     
  }
  else{
    blit(anim[0],player.x , player.y, 76,113, 30, 6, 30, delta);//idle animatio from spritesheet
    
  }

 



  lastFrame = now;  

  

}

let blitDex = 0;
let elapsed = 0;

function blit(sSImage,x,y,frameWidth, frameHeight, frames, cols, rate, delta){
  elapsed += delta;
  //console.log(elapsed);
  if(elapsed > 1000 / rate){
    clear();
    elapsed = 0;
    let blitX = (blitDex%cols)*frameWidth;
    let blitY = floor(blitDex / cols)*frameHeight;    
    
    image(sSImage,x,y,frameWidth, frameWidth, blitX,blitY, frameWidth, frameHeight);
    if(blitDex<frames-1){blitDex++;}else{blitDex=0;}
  }
}
function flip(x,y,w,h){

}