import Car from './Car';
import Frog from './Frog';
import Log from './Log';

let frog;
let cars = [];
let logs = [];
let grid = 50;

//Images
let img_frog, img_log , img_lilypad;

//Cars
let car1, car2, car3, car4;

//Image Groups
let log_array, car_array;

function drawBackground(p){
    // grass safety p.lines
    let green = p.color('#02E866');
    p.fill(green);
    p.rect(0, 0, p.width, grid); //top
    p.rect(0, p.height - grid, p.width, grid); //bottom
    p.rect(0, grid * 4, p.width, grid); //middle

    //water
    let blue = p.color('#0A68FF');
    p.fill(blue);
    p.rect(0, grid, p.width, grid * 3);

    //p.lines of road
    p.stroke('white');
    p.strokeWeight(3);
    p.line(0, grid * 5, p.width, grid * 5);
    p.strokeWeight(0.5);
    p.line(0, grid * 6, p.width, grid * 6);
    p.stroke('yellow');
    p.strokeWeight(2);
    p.line(0, grid * 7 - 2, p.width, grid * 7 - 2);
    p.line(0, grid * 7 + 2, p.width, grid * 7 + 2);
    p.stroke('white');
    p.strokeWeight(0.5);
    p.line(0, grid * 8, p.width, grid * 8);
    p.strokeWeight(3);
    p.line(0, grid * 9, p.width, grid * 9);

    //return to normal
    p.strokeWeight(1);
    p.stroke('black');
}

function drawAnimation (p) {
    for (let i = 0; i < cars.length; i++) {
        cars[i].update(p);
        cars[i].show(p);
        if (frog.intersects(cars[i])) {
            p.resetGame();
        }
    }
    
    for (let i = 0; i < logs.length; i++) {
        logs[i].update(p);
        logs[i].show(p);
        if (frog.intersects(logs[i]) && logs[i].color != img_lilypad) {
            p.resetGame();
        }
    }
}

function sketch(p){    
    p.resetGame = () => {
        frog = new Frog(p.width / 2 - grid / 2, p.height - grid, grid, img_frog);
        frog.attach(null);
    }
    
    p.preload = () => {
        img_frog = p.loadImage('https://clipartix.com/wp-content/uploads/2016/04/Cute-baby-frog-clipart-my-blog.png');
        
        img_log = p.loadImage('https://clipartix.com/wp-content/uploads/2017/02/Wood-log-clipart.png');
        img_lilypad = p.loadImage('https://clipartix.com/wp-content/uploads/2018/03/lily-clip-art-2018-56.png');
        
        car1 = p.loadImage('https://clipartix.com/wp-content/uploads/2016/08/Cars-car-clipart-free-clipart-images-3.png'); //yellow
        car2 = p.loadImage('https://clipartix.com/wp-content/uploads/2016/08/Cars-car-clipart-free-clipart-images-2.png'); //green
        car3 = p.loadImage('https://clipartix.com/wp-content/uploads/2016/08/Cars-car-clipart-free-clipart-images.png'); //blue
        car4 = p.loadImage('https://clipartix.com/wp-content/uploads/2018/09/red-clipart-2018-16.png'); //red

        log_array = [img_log, img_lilypad];
        car_array = [car1, car2, car3, car4];
    }
    
    p.setup = () => {
        p.createCanvas(500, 500);
        p.resetGame();
        
        let index = 0;
        // ROW 1
        for (let i = 0; i < 2; i++) {
            let x = i * 300;
            cars[index] = new Car(x, p.height - grid * 2, grid, grid, 2, ...car_array);
            index++;
        }
        
        // ROW 2
        for (let i = 0; i < 2; i++) {
            let x = i * 200 + 150;
            cars[index] = new Car(x, p.height - grid * 3, grid, grid, 1.2, ...car_array);
            index++;
        }
        
        // ROW 3
        for (let i = 0; i < 3; i++) {
            let x = i * 150 + 25;
            cars[index] = new Car(x, p.height - grid * 4, grid, grid, -1.2, ...car_array);
            index++;
        }
        
        // ROW 4
        for (let i = 0; i < 2; i++) {
            let x = i * 250 + 100;
            cars[index] = new Car(x, p.height - grid * 5, grid, grid, -2.3, ...car_array);
            index++;
        }
        
        // ROW 6
        index = 0;
        for (let i = 0; i < 3; i++) {
            let x = i * 200 + 30;
            logs[index] = new Log(x, p.height - grid * 7, grid * 1, grid, -1.3, ...log_array);
            index++;
        }

        // ROW 7
        for (let i = 0; i < 2; i++) {
            let x = i * 400 + 10;
            logs[index] = new Log(x, p.height - grid * 8, grid * 1, grid, 0.5, ...log_array);
            index++;
        }

        // ROW 8
        for (let i = 0; i < 2; i++) {
            let x = i * 400 + 10;
            logs[index] = new Log(x, p.height - grid * 9, grid * 1, grid, -2.5, ...log_array);
            index++;
        }
    }

    p.draw = () => {
        p.background(0);
        drawBackground(p);
        drawAnimation(p);

        frog.update(p);
        frog.show(p);
    }

    
//moving around
    p.keyPressed = () => {
        if (p.keyCode === p.UP_ARROW) {
            frog.move(p, 0, -1);
        } else if (p.keyCode === p.DOWN_ARROW) {
            frog.move(p, 0, 1);
        } else if (p.keyCode === p.RIGHT_ARROW) {
            frog.move(p, 1, 0);
        } else if (p.keyCode === p.LEFT_ARROW) {
            frog.move(p, -1, 0);
        }
    }
 
}

export default sketch;