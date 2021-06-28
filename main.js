function preload() {
clown_nose = loadImage('https://i.postimg.cc/PfYHdZgQ/clown-nose.png');
}

function setup() {
  canvas = createCanvas(300 ,300);
  canvas.position(525,300);
 // canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on('pose',gotPoses);
}

var noseX ,noseY; 
function draw() {
  image(video, 0, 0, 300, 300);
  //fill(255,0,0);
  //stroke(255,0,0);
  //circle(noseX , noseY ,20);
  image(clown_nose , noseX ,noseY ,30 , 30);
}

function Take_snap() {
  save("Fillterd.png");
}

function modelLoaded() {
  console.log("posenet initialized")
}

function gotPoses(results){
  
  console.log(results);
  if(results.length > 0){
   console.log("nose x =" + results[0].pose.nose.x);
   console.log("nose y =" + results[0].pose.nose.y);
   

  }
}
