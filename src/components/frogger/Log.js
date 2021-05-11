/*
import Car from './Car';

class Log extends Car {
    constructor(x, y, width, height, speed, color) {
        super(x, y, width, height, speed);
        this.color = color;
    }

    show(){
        image(this.color,this.x, this.y, this.width, this.width);
    }

    update(){
    
        //array of options
        let log_array = [img_log,img_lilypad];
       this.x += this.speed;
       if(this.speed > 0 && this.x > width+grid){
           this.x = - this.width - grid;
           //going right
           this.color = random(log_array)
       } else if(this.speed < 0 && this.x < -this.width-grid){
            this.x = width + grid;
            //going left
            this.color = random(log_array)
       }
    }
}
export default Log;
*/