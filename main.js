video="";
status1="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas=createCanvas(1366, 768);
    canvas.center();
}

function draw(){
 image(video, 0, 0, 1366, 768);   
}
function start(){
    objectdetected=ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="status: Detecting objects";
}
function modelloaded(){
    console.log("model is loaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}