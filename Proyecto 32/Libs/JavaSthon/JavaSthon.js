/* JavaSton.js library version 1.0.3, October 11th 2021
JavaSthon library created by @Horacio Ruggeri Ruiz
This library was created with the purpose of making
game designing and coding easier and more accesible 
for everyone.
this library merges two libraries into one and creates
other useful functions for time-saving and avoiding
unnecesary code. It also creates a method for using
some Python functions, such as print and input.
Enjoy this multifunctional library for creating awesome 2D games!
Every single line of code of this library was written
by @Horacio Ruggeri Ruiz.
Copyright @ All Rights Reserved*/
class Python {
    // Define function print
    print(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10) {
    if (t10 != undefined) {
        console.log(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10);
    }
    else if (t10 == undefined && t9 != undefined) {
        console.log(t1, t2, t3, t4, t5, t6, t7, t8, t9);
    }
    else if (t9 == undefined && t8 != undefined) {
        console.log(t1, t2, t3, t4, t5, t6, t7, t8);
    }
    else if (t8 == undefined && t7 != undefined) {
        console.log(t1, t2, t3, t4, t5, t6, t7);
    }
    else if (t7 == undefined && t6 != undefined) {
        console.log(t1, t2, t3, t4, t5, t6);
    }
    else if (t6 == undefined && t5 != undefined) {
        console.log(t1, t2, t3, t4, t5);
    }
    else if (t5 == undefined && t4 != undefined) {
        console.log(t1, t2, t3, t4);
    }
    else if (t4 == undefined && t3 != undefined) {
        console.log(t1, t2, t3);
    }
    else if (t3 == undefined && t2 != undefined) {
        console.log(t1, t2);
    }
    else if (t2 == undefined && t1 != undefined) {
        console.log(t1);
    }
    else {
        console.error("Syntax Error! you must put at least one parameter in print() function");
    }
}
// function newline
newline() {
    document.write("\n");
}
// function list
list(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10) {
    var list;
    if (t10 != undefined) {
        list = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
    }
    else if (t10 == undefined && t9 != undefined) {
        list = [t1, t2, t3, t4, t5, t6, t7, t8, t9];
    }
    else if (t9 == undefined && t8 != undefined) {
        list = [t1, t2, t3, t4, t5, t6, t7, t8];
    }
    else if (t8 == undefined && t7 != undefined) {
        list = [t1, t2, t3, t4, t5, t6, t7];
    }
    else if (t7 == undefined && t6 != undefined) {
        list = [t1, t2, t3, t4, t5, t6];
    }
    else if (t6 == undefined && t5 != undefined) {
        list = [t1, t2, t3, t4, t5];
    }
    else if (t5 == undefined && t4 != undefined) {
        list = [t1, t2, t3, t4];
    }
    else if (t4 == undefined && t3 != undefined) {
        list = [t1, t2, t3];
    }
    else if (t3 == undefined && t2 != undefined) {
        list = [t1, t2];
    }
    else if (t2 == undefined && t1 != undefined) {
        list = [t1];
    }
    else {
        console.error("Syntax Error! you must put at least one parameter in list() function");
    }
    return list;
}
    input(text, type) {
        var txt = document.createTextNode(text);
        var loc = document.createElement("input");
        loc.setAttribute("type", type);
        document.body.appendChild(txt);
        document.body.appendChild(loc);
        return loc;
    }
}
const python = new Python();
// class calculator
class Calculator {
    add(n1, n2) {
        var result = n1 + n2;
        return result;
    }
    subs(n1, n2) {
        var result = n1 - n2;
        return result;
    }
    mult(n1, n2) {
        var result = n1 * n2;
        return result;
    }
    div(n1, n2) {
        var result = n1 / n2;
        return result;
    }
    mod(n1, n2) {
        var result = n1 % n2;
        return result;
    }
    pow(n1, p) {
        var on1 = n1;
        for (var i = 1; i < p; i++) {
            n1 = n1 * on1;
        }
        var result = n1;
        return result;
    }
    rand(n1, n2) {
        var result = Math.round(random(n1, n2));
        return result;
    }
    getN(n1, n2, x) {
        var a = n2 - n1;
        var b = n1 - a;
        var result = (x - b) / a;
        return result;
    }
    getX(n1, n2, n) {
        var a = n2 - n1;
        var b = n1 - a;
        var result = (a * n) + b;
        return result;
    }
}
const calculator = new Calculator();
class Time {
    constructor() {
        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.month = this.month + 1;
        switch (this.month) {
            case 1:
                this.month = "enero";
            break;
            case 2:
                this.month = "febrero";
            break;
            case 3:
                this.month = "marzo";
            break;
            case 4:
                this.month = "abril";
            break;
            case 5:
                this.month = "mayo";
            break;
            case 6:
                this.month = "junio";
            break;
            case 7:
                this.month = "julio";
            case 8:
                this.month = "agosto";
            break;
            case 9:
                this.month = "septiembre";
            break;
            case 10:
                this.month = "octubre";
            break;
            case 11:
                this.month = "noviembre";
            break;
            case 12:
                this.month = "diciembre";
            break;
            default:
                break;
        }
        this.weekday = this.date.getDay();
        switch (this.weekday) {
            case 0:
                this.weekday = "domingo";
            break;
            case 1:
                this.weekday = "lunes";
            break;
            case 2:
                this.weekday = "martes";
            break;
            case 3:
                this.weekday = "miércoles";
            break;
            case 4:
                this.weekday = "jueves";
            break;
            case 5:
                this.weekday = "viernes";
            break;
            case 6:
                this.weekday = "sábado";
            break;
            default:
                break;
        }
        this.day = this.date.getDate();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.miliseconds = this.date.getMilliseconds();
    }
}
const time = new Time();
class Canvas {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        createCanvas(this.width, this.height);
    }
    color(color) {
        background(color);
    }
}
class Sprite {
    constructor(x, y, width, height, color, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.object = createSprite(this.x, this.y, this.width, this.height);
        this.isVisible = true;
        if (color != null && color != undefined) {
        this.color = color;
        }
        else {
            this.color = "gray";
        }
        this.object.shapeColor = this.color;
        if (image != null) {
            this.image = image;
        }
        if (this.image != null) {
            this.object.addAnimation("anim", this.image);
        }
        this.scale = 1;
        this.rotation = 0;
        this.debug = false;
    }
    update() {
        this.object.shapeColor = this.color;
        if (this.image != null) {
            this.object.addAnimation("anim", this.image);
            this.object.setAnimation("anim");
        }
        this.object.scale = this.scale;
        this.object.rotation = this.rotation;
        this.object.visible = this.isVisible;
        this.object.debug = this.debug;
    }
    bounce(target) {
        this.object.bounceOff(target);
    }
    collide(target) {
        this.object.collide(target);
    }
}
class Mouse {
    constructor() {
    this.x = mouseX;
    this.y = mouseY;
    }
    update() {
        this.x = mouseX;
        this.y = mouseY;
    }
}
function showSprites() {
    drawSprites();
}
function createBorders() {
    createEdgeSprites();
}
class Screen {
    constructor() {
        this.width = window.innerWidth - 25;
        this.height = window.innerHeight - 25;
    }
}
const screen = new Screen();
class Shape {
    rectangle(x, y, width, height) {
        rectMode(CENTER);
        var shape = rect(x, y, width, height);
        return shape;
    }
    circle(x, y, radius) {
        var shape = circle(x, y, radius);
        return shape;
    }
    line(xa, ya, xb, yb) {
        var shape = line(xa, ya, xb, yb);
        return shape;
    }
    ellipse(x, y, width, height) {
        var shape = ellipse(x,y,width, height);
        return shape;
    }
    text(string, x, y) {
        textAlign(CENTER);
        var shape = text(string, x, y);
        return shape;
    }
    image(img, x, y, width, height) {
        imageMode(CENTER);
        var shape = image(img, x, y, width, height);
        return shape;
    }
}
const shape = new Shape();
class AudioManager {
    
    play(audio) {
        audio.play();
    }
}
const SoundManager = new AudioManager();

class Input {
    keyPressed(key) {
        return keyDown(key);
    }
    keyWentPressed(key) {
        return keyWentDown(key);
    }
    keyReleased(key) {
        return keyWentUp(key);
    }
    mousePressed(button) {
        return mouseDown(button);
    }
    mouseWentPressed(button) {
        return mouseWentDown(button);
    }
    mouseReleased(button) {
        return mouseWentUp(button);
    }
}
const input = new Input();
class Style {
    fillColor(color) {
        fill(color);
    }
    strokeSize(size) {
        strokeWeight(size);
    }
    strokeColor(color) {
        stroke(color);
    }
    noStrokeColor() {
        noStroke();
    }
    font(font) {
        textFont(font);
    }
    textSize(size) {
        textSize(size);
    }
}
const style = new Style();
class ColorStock {
    random() {
        var c = color(random(0, 255), random(0, 255), random(0, 255));
        return c;
    }
    rgb(r, g, b) {
        var c = color(r, g, b);
        return c;
    }
    alpha(intensity) {
        tint(255, intensity);
    }
}
const colorStock = new ColorStock();
// Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

class Physics {
    constructor() {
    this.engine = Engine.create();
    this.world = this.engine.world;
    }
    update() {
        Engine.update(this.engine);
    }
    rectangle(x, y, width, height, properties, angle) {
        var r = new Box(x, y, width, height, properties, angle);
        return r;
    }
    image(img, x, y, width, height, properties, angle) {
        var i = new Picture(img, x, y, width, height, properties, angle);
        return i;
    }
    circle(x, y, radius, properties) {
        var c = new Circle(x, y, radius, properties);
        return c;
    }
    restriction(bodyA, bodyB, pointA, pointB, stiffness,length) {
        var r = new Restriction(bodyA, bodyB, pointA, pointB, stiffness,length);
        return r;
    }
    addForce(body, force) {
        force = {x: force.x / 500, y: force.y / 500};
        Body.applyForce(body, body.position, force);
    }
    setStatic(body, bool) {
        Body.setStatic(body, bool);
    }
    setRotation(body, angle) {
        Body.setAngle(body, angle);
    }
}
var physics = new Physics();
function run() {
    physics.update();
}
var loopInstructionsInScript = setInterval(loopJavaSthonInstructions, 35);
function loopJavaSthonInstructions() {
    run();
}
class Box {
    constructor(x, y, width, height, properties, angle) {
        this.body = Bodies.rectangle(x, y, width, height, properties);
        World.add(physics.world, this.body);
        this.width = width;
        this.height = height;
        if (angle != null) {
            physics.setRotation(this.body, angle);
        }
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
class Circle {
    constructor(x, y, radius, properties) {
        this.body = Bodies.circle(x, y, radius, properties);
        World.add(physics.world, this.body);
        this.radius = radius;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0, this.radius * 2);
        pop();
    }
}
class Picture {
    constructor(img, x, y, width, height, properties, angle) {
        this.body = Bodies.rectangle(x, y, width, height, properties);
        World.add(physics.world, this.body);
        this.width = width;
        this.height = height;
        this.image = img;
        if (angle != null) {
            physics.setRotation(this.body, angle);
        }
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
class Restriction {
    constructor(bodyA, bodyB, pointA, pointB, stiffness,length) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.pointA = pointA;
        this.pointB = pointB;
        this.stiffness = stiffness;
        this.length = length;
        var options = {
            bodyA: this.bodyA,
            bodyB: this.bodyB,
            pointA: this.pointA,
            pointB: this.pointB,
            stiffness: this.stiffness,
            length: this.length
        }
        this.restriction = Constraint.create(options);
        World.add(physics.world, this.restriction);
    }
    display() {
        var pointA;
        var pointB;
        if (this.restriction.bodyA != null || this.restriction.bodyB != null 
            || this.restriction.pointA != null || this.restriction.pointB != null) {
        if (this.restriction.bodyA) {
            pointA = this.restriction.bodyA.position;
        }
        else {
            pointA = this.restriction.pointA;
        }
        if (this.restriction.bodyB) {
            pointB = this.restriction.bodyB.position;
        }
        else {
            pointB = this.restriction.pointB;
        }
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    join(bodyA, bodyB) {
        this.restriction.bodyA = bodyA;
        if (bodyB != undefined) {
            this.restriction.bodyB = bodyB;
        }
    }
    delete(body) {
        if (body === this.restriction.bodyA) {
            this.restriction.bodyA = null;
        }
        else if (body === this.restriction.bodyB) {
            this.restriction.bodyB = null;
        }
        else {
            console.error("Fatal error! you must define a body to restriction to remove it");
        }
    }
}