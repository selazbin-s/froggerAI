/*

import Car from './Car';
import Frog from './Frog';
import Log from './Log';

export default function sketch(p){
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
    let car4;
    
    let a = 0;
    let car_array = [car1, car2, car3];
    
    p.resetGame = () => {
        frog = new Frog(p.width / 2 - grid / 2, p.height - grid, grid);
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
    }
    
    p.setup = () => {
        p.createCanvas(500, 500);
        p.resetGame();
        
        let index = 0;
        // ROW 1
        for (let i = 0; i < 2; i++) {
            let x = i * 300;
            cars[index] = new Car(x, p.height - grid * 2, grid, grid, 2, car1);
            index++;
        }
        
        // ROW 2
        for (let i = 0; i < 2; i++) {
            let x = i * 200 + 150;
            cars[index] = new Car(x, p.height - grid * 3, grid, grid, 1.2, car2);
            index++;
        }
        
        // ROW 3
        for (let i = 0; i < 3; i++) {
            let x = i * 150 + 25;
            cars[index] = new Car(x, p.height - grid * 4, grid, grid, -1.2, car3);
            index++;
        }
        
        // ROW 4
        for (let i = 0; i < 2; i++) {
            let x = i * 250 + 100;
            cars[index] = new Car(x, p.height - grid * 5, grid, grid, -2.3, car4);
            index++;
        }
        
        // //ROW 5
        // //intentionally left blank, rest spot
        
        // ROW 6
        index = 0;
        for (let i = 0; i < 3; i++) {
            let x = i * 200 + 30;
            logs[index] = new Log(x, p.height - grid * 7, grid * 1, grid, -1.3, img_log);
            index++;
        }

        // ROW 7
        for (let i = 0; i < 2; i++) {
            let x = i * 400 + 10;
            logs[index] = new Log(x, p.height - grid * 8, grid * 1, grid, 0.5, img_lilypad);
            index++;
        }

        // ROW 8
        for (let i = 0; i < 2; i++) {
            let x = i * 400 + 10;
            logs[index] = new Log(x, p.height - grid * 9, grid * 1, grid, -2.5, img_log);
            index++;
        }
    }

    p.drawBackground = () => {
        // grass safety p.lines
        let green = p.color('#02E866');
        p.fill('green');
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

    p.drawAnimation = () => {
        for (let i = 0; i < cars.length; i++) {
            cars[i].update();
            cars[i].show();

            if (frog.intersects(cars[i])) {
                p.resetGame();
            }
        }
    
        for (let i = 0; i < logs.length; i++) {
            logs[i].update();
            logs[i].show();

            if (frog.intersects(logs[i])) {
                p.resetGame();
            }
        }
    }

    p.draw = () => {
        p.background(0);
        p.drawBackground();
        p.drawAnimation();
        
        frog.update();
        frog.show();
    }

//moving around
    p.keyPressed = () => {
        if (p.keyCode === p.UP_ARROW) {
            frog.move(0, -1);
        } else if (p.keyCode === p.DOWN_ARROW) {
            frog.move(0, 1);
        } else if (p.keyCode === p.RIGHT_ARROW) {
            frog.move(1, 0);
        } else if (p.keyCode === p.LEFT_ARROW) {
            frog.move(-1, 0);
        }
    }
}
*/