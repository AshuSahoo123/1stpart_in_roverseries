canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
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