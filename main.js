function preload(){

}

function setup(){

    canvas = createCanvas(600,600);
    //canvas.center();
    canvas.position(560,275);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";


}

function draw(){
    image(video,100,100,400,400);
    stroke("red");
    fill("red");
    circle(40,40,80);
    circle(40,560,80);
    circle(560,40,80);
    circle(560,560,80);
    fill("blue");
    rect(30,30,540,20);
    rect(550,30,20,540);
    rect(30,550,540,20);
    rect(30,30,20,540);
}

function take_snapshot(){
    save("I_am_addicted_to_p5.png");

}
