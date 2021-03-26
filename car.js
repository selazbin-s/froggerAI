class Car extends Rectangle {


//added color to constructor
    constructor(x, y, width, height, speed, color) {

        super(x, y, width, height);

        this.speed = speed;
        
        this.color = color;

    }

    show(){
        //use color from constructor as image
        image(this.color,this.x, this.y, this.width, this.width);

    }

    update(){
    
        //array of options
        let car_array = [car1,car2,car3, car4];

       this.x += this.speed;

       if(this.speed > 0 && this.x > width+grid){

           this.x = - this.width - grid;
           
           //going right
           this.color = random(car_array)

       } else if(this.speed < 0 && this.x < -this.width-grid){

            this.x = width + grid;

            //going left
            this.color = random(car_array)

       }

    }

}