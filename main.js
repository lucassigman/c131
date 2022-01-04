dog_cat="";
Objects=[];
function preload(){
    dog_cat=loadImage("master-bedroom.png")
}

function setup(){
    canvas=createCanvas(680,450)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(680,450)
    video.hide()
    object_define=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status-detecting_objects"
}
function modelloaded() {
    console.log("cocoloaded")
    object_define.detect(dog_cat,getresult)
}
function getresult(error,result) {
console.log(result)
    Objects=result
}
function draw(){
    image(video,0,0,680,450)
    for(i=0;i<Objects.length;i++){
     document.getElementById("status").innerHTML="status-detected_objects"
        fill("blue")
        text(Objects[i].label,Objects[i].x,Objects[i].y)
        noFill()
        stroke("blue")
        rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height)
    }    
    /*fill("red")
    text("dog",200,80)
    noFill()
    stroke("red")
    rect(200,50,100,250)
    fill("red")
    text("cat",400,100)
    noFill()
    stroke("red")
    rect(400,50,100,250)*/

}
