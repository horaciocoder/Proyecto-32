class Division {
    constructor(x, y) {
        this.division = physics.rectangle(x, y, 10, 200, {isStatic: true});
        this.color = 255;
    }
    display() {
        style.fillColor(this.color);
        this.division.display();
    }
}