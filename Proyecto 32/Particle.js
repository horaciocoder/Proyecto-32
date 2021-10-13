class Particle {
    constructor(x, y) {
        this.particle = physics.circle(x, y, 10, {restitution: 0.71});
        this.color = color(calculator.rand(0, 255), calculator.rand(0, 255), calculator.rand(0, 255));
    }
    display() {
        style.fillColor(this.color);
        this.particle.display();
    }
}