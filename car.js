class Car extends Rectangle {


//added color to constructor
    constructor(x, y, width, height, speed, color) {

        super(x, y, width, height);

        this.speed = speed;
        
        this.color = color;

    }



    show(){

        // if(color=car1)
        // {
        //     fill('yellow');
        // }
        // else if(color=car2)
        // {
        //     fill('green');
        // }
        // else
        // {
        //     fill('blue')
        // }
        // rect(this.x, this.y, this.width, this.height);
        
        
        //use color from constructor as image
        image(this.color,this.x, this.y, this.width, this.width);

    }



    update(){

       this.x += this.speed;

       if(this.speed > 0 && this.x > width+grid){

           this.x = - this.width - grid;

       } else if(this.speed < 0 && this.x < -this.width-grid){

            this.x = width + grid;

       }

    }



}