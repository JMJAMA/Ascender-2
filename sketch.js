// let vid;
// let playing = true;
let img,img1;

let pg,pg1,pg2;

function preload(){
  img1 = loadImage("image.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // noCanvas();

  // vid = createVideo("paraglider.mov");
  // vid.size(0, displayHeight);
  // vid.volume(0);
  // vid.loop();
  // vid.hide(); // hides the html video loader
  // // vid.position(0.0);

  
  img1.resize(width,0);

  pg = createGraphics(windowWidth,windowHeight);
  pg1 = createGraphics(windowWidth,windowHeight);
  pg2 = createGraphics(windowWidth,windowHeight);

}

function draw() {
  background(220);
  //let img = vid.get();

  pg.image(img1, 0, 0);
  image(pg,0,0);
  //image(img, 0, 0); // redraws the video frame by frame in                           p5
 
  
  
  boxes();
  linesBottom();
  linesTop();

  let vidSize = map(mouseX,0,width,0,200);
  let vidSizeY = map(mouseY,0,height,150,500);
  let vidWindowX = map(mouseX,0,width,350,width-(350-(vidSize/2)));
  let vidWindowY = map(mouseY,0,height,350,height-(450-(vidSize/2)));
  

  let sx = (948-200);
  let sy = 148;
  let sw = 250;
  let sh = 325;

  let dx = (948-143);
  let dy = 246;
  let dw = 397;
  let dh = 501;

  let al =map(mouseX,0,width,0,255);

 
 
 
  copy(pg,sx,sy,sw,sh,dx,dy,dw,dh);
 
  
  

  
  
 

  
  //stroke(255);
  //rect(sx,sy,sw,sh);
  
}

// function keyPressed() {
//  vid.time(random(vid.duration())) 
// }

function boxes() {
  
   let tilesX = 6;
  let tilesY = 4;
  
  let tileW = width/tilesX;
  let tileH = height/tilesY;
  
  

 
 
  
  noFill();
  stroke(255,0,0);
  
  for(let x = 0; x < tilesX; x ++){
    for(let y = 0; y < tilesY; y ++){
      
      //rect(x*tileW,y*tileH,tileW,tileH);
    
    }
  }

}


function linesBottom() {
  
 
 

}


function linesTop() {
  
  
  
  let CtilesX = 12;
  let CtilesY = 6;
  
  let CtileW = width/CtilesX;
  let CtileH = height/CtilesY;
  
 
  
  let x1 = CtileW;
  let y1 = CtileH;
 
  
  
 
 
  
  noFill();
  strokeWeight(2);
  stroke(255);

  translate(-CtileW/2,-CtileH/2);
  
  
  for(let x = 0; x < CtilesX+1; x ++){
    for(let y = 0; y < CtilesY+1; y ++){
      
      
      let cellCenter = dist(mouseX,mouseY,x*x1,y*y1);

      let cellLeft = dist(mouseX,mouseY,x*x1,y*y1);
      let cellTop = dist(mouseX,mouseY,x*x1,y*y1);
      let cellRight = dist(mouseX,mouseY,x*x1,y*y1);
      let cellBottom = dist(mouseX,mouseY,x*x1,y*y1);
      
      noStroke();
      fill(255,255,255,200-(cellCenter/2));
      //line(x*x1,y*y1,x*x1,y*y1-(cellBottom/30)*1.2);
      push();

      
      
      rectMode(CENTER);
      rect(CENTER);
      rect(CtileW/2+x*x1,y*y1,60-cellCenter/8,1);
      rect(+CtileW+x*x1,+CtileH/2+y*y1,1,60+-cellCenter/8);
      //line(x*x1+-CtileH+(cellBottom/0),y*y1,x*x1,y*y1);
      pop();

      push();

      
      fill(255,255,255,250-(cellCenter*1.2));
      rectMode(CENTER);
      rect(CENTER);
      rect(CtileW/2+x*x1,y*y1,60-cellCenter/8,4);
      rect(+CtileW+x*x1,+CtileH/2+y*y1,4,60+-cellCenter/8);
      //line(x*x1+-CtileH+(cellBottom/0),y*y1,x*x1,y*y1);
      pop();
      
      
      //ellipse(x*x1,y*y1,50-cellCenter/15,50-cellCenter/15);
     
    
    }
  }

}
