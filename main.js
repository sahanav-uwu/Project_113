function preload(){
    img = loadImage('https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
}

function setup(){
    canvas = createCanvas(450, 350);
    canvas.position(200, 170);
    camera = createCapture(VIDEO);
    camera.hide();
}

function take_snapshot(){
    save("omg_wow_a_photo.png");
}


function draw(){
    image(camera, 100, 75, 250, 200);

    rect(50, 40, 350, 20);
    fill(0, 128, 128);

    rect(50, 290, 350, 20);

    circle(50, 50, 50);
    fill(0, 128, 128);

    circle(50, 300, 50);
    fill(0, 128, 128);

    circle(400, 50, 50);
    fill(255, 0, 120);

    circle(400, 300, 50);
    fill(255, 0, 120);

    image(img, 10, 10, 100, 70);

}



//preload() This is a predefined function of p5.js, in this function you need to define all the things which you want to use throughout the code.
//setup() This is a predefined function of p5.js, this function is called by p5.js only once when the program starts. You need to write all the codes of your website.
//draw() This is a predefined function of p5.js, in this function you need to write all the codes related to drawing things on canvas.