import Car from './Car';

class Log extends Car {
    constructor(x, y, width, height, speed, log, lilypad) {
        super(x, y, width, height, speed);
        this.color = log;
    }

    show(p){
        p.image(this.color,this.x, this.y, this.width, this.width);
    }

    update(p){
    
        //array of options
        let log_array = [this.img_log, this.img_lilypad];
        this.x += this.speed;
        if(this.speed > 0 && this.x > p.width + p.grid){
           this.x = - this.width - p.grid;
           //going right
           //this.color = p.random(log_array)
        } else if(this.speed < 0 && this.x < -this.width- p.grid){
            this.x = p.width + p.grid;
            //going left
            //this.color = p.random(log_array)
        }
    }
}
export default Log;
