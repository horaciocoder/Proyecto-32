class Plinko {
    constructor(x, y) {
        this.plinko = physics.circle(x, y, 10, {isStatic: true});
        this.color = 255;
    }
    display() {
        style.fillColor(this.color);
        this.plinko.display();
    }
}