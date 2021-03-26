let frog;
let cars = [];
let logs = [];
let grid = 50;

let img_frog;

let img_log;
let img_lilypad;

let car1;
let car2;
let car3;

let a=0;
let car_array = [car1,car2,car3];

function resetGame(){

    frog = new Frog(width / 2 - grid / 2, height - grid, grid);

    frog.attach(null);

}

function preload()
{
    img_frog=loadImage('https://cdn.friendlystock.com/wp-content/uploads/2019/07/4-chibi-kawaii-frog-cartoon-clipart.jpg');

    img_log=loadImage('https://clipartix.com/wp-content/uploads/2017/02/Wood-log-clipart.png');
    img_lilypad=loadImage('https://clipartix.com/wp-content/uploads/2018/03/lily-clip-art-2018-56.png');

    car1=loadImage('https://clipartix.com/wp-content/uploads/2016/08/Cars-car-clipart-free-clipart-images-3.png'); //yellow
    car2=loadImage('https://clipartix.com/wp-content/uploads/2016/08/Cars-car-clipart-free-clipart-images-2.png'); //green
    car3=loadImage('https://clipartix.com/wp-content/uploads/2016/08/Cars-car-clipart-free-clipart-images.png'); //blue
    car4=loadImage('https://clipartix.com/wp-content/uploads/2018/09/red-clipart-2018-16.png'); //red

}

function setup(){
    
    createCanvas(500,500);

    resetGame();
    
    let index = 0;

    // ROW 1
    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        cars[index] = new Car(x, height - grid * 2, grid, grid, 2, car1); 
        index ++;
    }

    // ROW 2
    for (i = 0; i < 2; i++) {
        let x = i * 200 +150;
        cars[index] = new Car(x, height - grid * 3, grid, grid, 1.2, car2);
        index ++;
    }

    // ROW 3
    for (i = 0; i < 3; i++) {
        let x = i * 150 + 25;
        cars[index] = new Car(x, height - grid * 4, grid, grid, -1.2, car3);
        index ++;
    }

    // ROW 4
    for (i = 0; i < 2; i++) {
        let x = i * 250 + 100;
        cars[index] = new Car(x, height - grid * 5, grid, grid, -2.3, car4);
        index ++;
    }

    // //ROW 5
    // //intentionally left blank, rest spot

    // ROW 6
    index = 0;
    for (i = 0; i < 3; i++) {
        let x = i * 200 + 30;
        logs[index] = new Log(x, height - grid * 7, grid * 1, grid, -1.3, img_log);
        index ++;
    }

    // ROW 7
    for (i = 0; i < 2; i++) {
        let x = i * 400 + 10;
        logs[index] = new Log(x, height - grid * 8, grid * 1, grid, 0.5, img_lilypad);
        index ++;
    }

    // ROW 8
    for (i = 0; i < 2; i++) {
        let x = i * 400 + 10;
        logs[index] = new Log(x, height - grid * 9, grid * 1, grid, -2.5, img_log);
        index ++;
    }
}

function drawBackground(){
    // grass safety lines
    fill('lime');
    rect(0, 0, width,grid); //top
    rect(0, height-grid,width,grid); //bottom
    rect(0, grid*4,width,grid); //middle
    //water
    fill('blue');
    rect(0,grid,width,grid*3);
    //lines of road
    stroke('white');
    strokeWeight(3);
    line(0, grid*5,width,grid*5);
    strokeWeight(0.5);
    line(0, grid*6,width,grid*6);
    stroke('yellow');
    strokeWeight(2);
    line(0, grid*7-2,width,grid*7-2);
    line(0, grid*7+2,width,grid*7+2);
    stroke('white');
    strokeWeight(0.5);
    line(0, grid*8,width,grid*8);
    strokeWeight(3);
    line(0, grid*9,width,grid*9);
    //return to normal
    strokeWeight(1);
    stroke('black');
}

function drawAnimation(){
    for(let i = 0; i < cars.length; i++){
        cars[i].update();
        cars[i].show();
        
        if(frog.intersects(cars[i])){
            resetGame();
        }
    }


    for(i = 0; i < logs.length; i++){
        logs[i].update();
        logs[i].show();

        if(frog.intersects(logs[i])){
            resetGame();
        }
    }

}

function draw(){
  
    background(0);
    drawBackground();
    drawAnimation();

    frog.update();
    frog.show();

}


//moving around
function keyPressed() {
    if(keyCode === UP_ARROW){
        frog.move(0, -1);
    }else if(keyCode === DOWN_ARROW){
        frog.move(0, 1);
    }else if(keyCode === RIGHT_ARROW){
        frog.move(1, 0);
    }else if(keyCode === LEFT_ARROW){
        frog.move(-1, 0);
    }
}

