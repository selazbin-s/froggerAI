import Rectangle from './Rectangle';
class Car extends Rectangle {
    //added color to constructor
    constructor(x, y, width, height, speed, car1, car2, car3, car4) {
        super(x, y, width, height);
        this.speed = speed;
        let car_array = [car1,car2,car3,car4];
        this.color = car_array[Math.floor(Math.random()*4)];
    }

    show(p) {
        //use color from constructor as image
        p.image(this.color, this.x, this.y, this.width, this.width);
    }

    update(p) {
        //array of options
        let car_array = this.color;
        this.x += this.speed;
        if (this.speed > 0 && this.x > p.width + this.width) {
            this.x = - this.width - this.width;
            //going right
            //this.color = p.random(car_array);
        } else if (this.speed < 0 && this.x < -this.width - this.width) {
            this.x = p.width + this.width;
            //going left
            //this.color = p.random(car_array);
        }
    }
}

export default Car;
