canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

mars_images = ["https://scx2.b-cdn.net/gfx/news/2020/bestregionfo.jpg", 
               "https://mars.nasa.gov/system/downloadable_items/42772_PIA23233.jpg", 
               "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/16/93574.jpg",
               "mars.jpg"];

random_number = Math.floor(Math.random() * 4);


background_image = mars_images[random_number];
rover_image = "rover.png";

function add() {
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadbg;
    bg_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadbg() {
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);

    if(keypress == "37") {
        left();
        console.log("left");
    }

    if(keypress == "38") {
        up();
        console.log("up");
    }

    if(keypress == "39") {
        right();
        console.log("right");
    }

    if(keypress == "40") {
        down();
        console.log("down");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}