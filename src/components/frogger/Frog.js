import Rectangle from './Rectangle';

class Frog extends Rectangle {
    constructor(x, y, width, img_frog) {
        super(x, y, width, width);
        this.attached = null;
        this.img_frog = img_frog;
    }

    attach(log) {
        this.attached = log;
    }
    update(p) {
        if (this.attached != null) {
            this.x += this.attached.speed;
        }
        this.x = p.constrain(this.x, 0, p.width - this.width);
    }

    show(p) {
        //fill(0, 255, 0, 200);
        //rect(this.x, this.y, this.width, this.width);
        p.image(this.img_frog, this.x, this.y, this.width, this.width);
    }
    move(p, xdir, ydir) {
        this.x += xdir * p.grid;
        this.y += ydir * p.grid;
    }
}
export default Frog;
