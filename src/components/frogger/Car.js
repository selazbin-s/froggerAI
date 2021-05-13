import Rectangle from './Rectangle';
class Car extends Rectangle {
    //added color to constructor
    constructor(x, y, width, height, speed, color) {
        super(x, y, width, height);
        this.speed = speed;
        this.color = color;
    }

    show(p) {
        //use color from constructor as image
        p.image(this.color, this.x, this.y, this.width, this.width);
    }

    update(p) {
        //array of options
        let car_array = this.color;
        this.x += this.speed;
        if (this.speed > 0 && this.x > p.width + p.grid) {
            this.x = - this.width - p.grid;
            //going right
            //this.color = p.random(car_array);
        } else if (this.speed < 0 && this.x < -this.width - p.grid) {
            this.x = p.width + p.grid;
            //going left
            //this.color = p.random(car_array);
        }
    }
}

export default Car;
