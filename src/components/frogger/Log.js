import Car from './Car';

class Log extends Car {
    constructor(x, y, width, height, speed, log, lilypad) {
        super(x, y, width, height, speed);
        let log_array = [log, lilypad];
        this.color = log_array[Math.round(Math.random())];
    }

    show(p){
        p.image(this.color,this.x, this.y, this.width, this.width);
    }

    update(p){
        this.x += this.speed;
        if(this.speed > 0 && this.x > p.width + this.height){   //Going Left
           this.x = - this.width - this.height;
        } else if(this.speed < 0 && this.x < -this.width- this.height){ //Going Right
            this.x = p.width + this.height;
        }
    }
}
export default Log;
