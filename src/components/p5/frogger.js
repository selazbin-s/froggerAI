var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var motorcycle = new Image();
motorcycle.src = "../images/motorcycle.jpg";
var motorcycleX1 = 100;
var motorcycleY1 = 400;
var motorcycleSx1 = 0;
var motorcycleWidth = 60;
var motorcycleHeight = 35;
var motorcycleX2 = 500;
var motorcycleSX2 = 0;
var motorcycleY2 = 400;

var frog = new Image();
frog.src = "../images/frogger.jpg";
var sx = 0;
var sy = 0;
var swidth = 70;
var sheight = 70;
var x = 50;
var y = 444;
var width = 30;
var height = 30;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var up = true;
var down = true;
var right = true;
var left = true;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawBackground() {
    ctx.fillStyle = "lime";
    ctx.fillRect(0, 440, 570, 45);
    ctx.fillRect(0, 220, 570, 45);

    ctx.beginPath();
    ctx.moveTo(0, 395);
    ctx.lineTo(570, 395);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(570, 350);
    ctx.strokeStyle = "white";
    ctx.setLineDash([0]);
    ctx.strokeWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 305);
    ctx.lineTo(570, 305);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();



    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 570, 220);
}

function keyDownHandler(e) {
    if (e.keyCode === 39) { rightPressed = true; }
    if (e.keyCode === 37) { leftPressed = true; }
    if (e.keyCode === 38) { upPressed = true; }
    if (e.keyCode === 40) { downPressed = true; }
}

function keyUpHandler(e) {
    if (e.keyCode === 39) { rightPressed = false; }
    if (e.keyCode === 37) { leftPressed = false; }
    if (e.keyCode === 38) { upPressed = false; }
    if (e.keyCode === 40) { downPressed = false; }
}

function drawMotorcycle() {

    var motorcycleSX;

    ctx.drawImage(motorcycle, motorcycleSx1, 0, 60, 50, motorcycleX1, motorcycleY1, motorcycleWidth, motorcycleHeight);
    if (motorcycleX1 < canvas.width + 100) {
        motorcycleX1 = motorcycleX1 + 5;
    }
    else {
        motorcycleX1 = -100;
        motorcycleSx1 = (Math.floor(Math.random() * 4)) * 60;
    }

    ctx.drawImage(motorcycle, motorcycleSX2, 0, 60, 50, motorcycleX2, motorcycleY2, motorcycleWidth, motorcycleHeight);
    if (motorcycleX2 < canvas.width + 100) {
        motorcycleX2 = motorcycleX2 + 5;
    }
    else {
        motorcycleX2 = -100;
        motorcycleX2 = (Math.floor(Math.random() * 4)) * 60;
    }
}

function collision() {
    var motorcyclesX = [motorcycleX1, motorcycleX2];
    var motorcyclesY = [motorcycleY1, motorcycleY2];

    for (var i = 0; i < motorcyclesX.length; i++) {
        if (motorcyclesX[i] <= x + width && motorcyclesX[i] + motorcycleWidth >= x &&
            motorcyclesY[i] + motorcycleHeight >= y && motorcyclesY[i] <= y + height) {
            y = 488;
        }
    }
}

function moveFrog() {
    if (upPressed === true && up === true && y > 20) {
        y = y - 44;
        up = false;
    }
    if (upPressed === false) {
        up = true;
    }

    if (downPressed === true && down === true && y + height < canvas.height - 80) {
        y = y + 44;
        down = false;
    }

    if (downPressed === false) {
        down = true;
    }

    if (rightPressed === true && right === true && x + width < canvas.width - 20) {
        x = x + 44;
        right = false;
    }

    if (rightPressed === false) {
        right = true;
    }

    if (leftPressed === true && left === true && x > 20) {
        x = x - 44;
        left = false;
    }

    if (leftPressed === false) {
        left = true;
    }
}

function drawFrog() {
    ctx.drawImage(frog, sx, sy, swidth, sheight, x, y, width, height);
}

function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawFrog();
    moveFrog();
    drawMotorcycle();
    collision();

    requestAnimationFrame(draw);
}

export {draw}