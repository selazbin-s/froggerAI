class Car extends Rectangle {



    constructor(x, y, width, height, speed, color) {

        super(x, y, width, height);

        this.speed = speed;
        
        this.color = color;

    }



    show(){

        fill(300);

        //rect(this.x, this.y, this.width, this.height);
        
        image(color,this.x, this.y, this.width, this.width);

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