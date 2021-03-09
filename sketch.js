let frog;

let cars = [];

let logs = [];

let grid = 50;


function resetGame(){

    frog = new Frog(width / 2 - grid / 2, height - grid, grid);

    frog.attach(null);

}



function setup(){

    createCanvas(500,500);

    resetGame();

    frogimg = loadImage('image/frogger.png');
    
    var button = createButton("Start");
    button.position(950, 570);
    button.mousePressed(drawAnimation);
    
    let index = 0;



    // ROW 1

    for (let i = 0; i < 2; i++) {

        let x = i * 300;

        cars[index] = new Car(x, height - grid * 2, grid * 2, grid, 2);

        index ++;

    }



    // ROW 2

    for (i = 0; i < 2; i++) {

        let x = i * 200 +150;

        cars[index] = new Car(x, height - grid * 3, grid, grid, -1.2);

        index ++;

    }



    // ROW 3

    for (i = 0; i < 4; i++) {

        let x = i * 150 + 25;

        cars[index] = new Car(x, height - grid * 4, grid, grid, 1.2);

        index ++;

    }



    // ROW 4

    index = 0;

    for (i = 0; i < 2; i++) {

        let x = i * 250 + 100;

        logs[index] = new Log(x, height - grid * 5, grid * 3, grid, 2.3);

        index ++;

    }

    //ROW 5
    //intentionally left blank, rest spot

    // ROW 6

    for (i = 0; i < 3; i++) {

        let x = i * 200 + 30;

        logs[index] = new Log(x, height - grid * 7, grid * 2, grid, -1.3);

        index ++;

    }



    // ROW 7

    for (i = 0; i < 2; i++) {

        let x = i * 400 + 10;

        logs[index] = new Log(x, height - grid * 8, grid * 4, grid, 0.5);

        index ++;

    }

    // ROW 8

    for (i = 0; i < 2; i++) {

        let x = i * 400 + 10;

        logs[index] = new Log(x, height - grid * 9, grid * 2, grid, -2.5);

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

    }

    

    if (frog.y < height - grid * 6 && frog.y > grid*2) {

        let ok = false;

        

        for(i = 0; i<logs.length; i++){

            if (frog.intersects(logs[i])) {

                ok = true;

                frog.attach(logs[i]);

            }

        }

        if(!ok){

            resetGame();

        }

    } else {

        frog.attach(null);

    }
}

function draw(){
    background(0);
    drawBackground();


    //drawAnimation();

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

// function preload()
// {
//     frogimg = loadImage('image/frogger.png');
// }