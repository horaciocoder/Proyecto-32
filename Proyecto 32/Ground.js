class Ground {
    constructor() {
        this.ground = physics.rectangle(canvas.width / 2, canvas.height - 10, canvas.width - 10, 10, {isStatic: true});
        this.color = 255;
    }
    display() {
        style.fillColor(this.color);
        this.ground.display();
    }
}