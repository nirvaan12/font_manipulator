function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
canvas= createCanvas(550,480);
    canvas.position();
poseNet= ml5.poseNet(video,modalLoaded);
    poseNet.on("pose",gotPose);
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function gotPose(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    background("#E6097F");
}