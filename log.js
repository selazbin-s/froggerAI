class Log extends Car {



    constructor(x, y, width, height, speed) {

        super(x, y, width, height, speed);

    }

    show(){

        image(img_log,this.x, this.y, this.width, this.width);

    }

}