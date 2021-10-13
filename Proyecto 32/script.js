var ball;
var plinkos = [];
var divisions = [];
var borders = [];
var ground;
var gameState;
var chances;
var score;
function setup() {
    canvas = new Canvas(640, 600);
    for (let i = 80; i < canvas.width - 80; i += 50) {
        plinkos.push(new Plinko(i, 75));
    }
    for (let i = 60; i < canvas.width - 60; i += 50) {
        plinkos.push(new Plinko(i, 150));
    }
    for (let i = 80; i < canvas.width - 80; i += 50) {
        plinkos.push(new Plinko(i, 225));
    }
    for (let i = 60; i < canvas.width - 60; i += 50) {
        plinkos.push(new Plinko(i, 300));
    }
    for (let i = 0; i <= canvas.width; i += 80) {
        divisions.push(new Division(i, canvas.height * 0.81));
    }
    var border1 = physics.rectangle(canvas.width / 2, 0, canvas.width, 10, {isStatic: true});
    borders.push(border1);
    var border2 = physics.rectangle(canvas.width / 2, canvas.height, canvas.width, 10, {isStatic: true});
    borders.push(border2);
    var border3 = physics.rectangle(0, canvas.height / 2, 10, canvas.height, {isStatic: true});
    borders.push(border3);
    var border4 = physics.rectangle(canvas.width, canvas.height / 2, 10, canvas.height, {isStatic: true});
    borders.push(border4);
    ground = new Ground();
    chances = 5;
    gameState = "play";
    score = 0;
}
function draw() {
    canvas.color(0);
    for (let i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
    for (let i = 0; i < borders.length; i++) {
        style.fillColor("red");
        borders[i].display();
    }
    for (let i = 0; i < divisions.length; i++) {
        divisions[i].display();
    }
    ground.display();
    if (ball != null) {
        ball.display();
        if (ball.particle.body.position.y > 570) {
            if (ball.particle.body.position.x >= 245 && ball.particle.body.position.x <= 395) {
                score += 200;
            }
            else if (ball.particle.body.position.x >= 165 && ball.particle.body.position.x <= 235 
                || ball.particle.body.position.x >= 405 && ball.particle.body.position.x <= 475) {
                score += 300;
            }
            else if (ball.particle.body.position.x >= 85 && ball.particle.body.position.x <= 155 
                || ball.particle.body.position.x >= 485 && ball.particle.body.position.x <= 555) {
                score += 400;
            }
            else if (ball.particle.body.position.x >= 5 && ball.particle.body.position.x <= 75 
                || ball.particle.body.position.x >= 565 && ball.particle.body.position.x <= 635) {
                score += 500;
            }
            ball = null;
        }
    }
    style.textSize(30);
    style.fillColor("#33ff14");
    shape.text("500", (divisions[0].division.body.position.x + divisions[1].division.body.position.x) / 2, canvas.height * 0.75);
    shape.text("500", (divisions[7].division.body.position.x + divisions[8].division.body.position.x) / 2, canvas.height * 0.75);
    shape.text("400", (divisions[1].division.body.position.x + divisions[2].division.body.position.x) / 2, canvas.height * 0.75);
    shape.text("400", (divisions[6].division.body.position.x + divisions[7].division.body.position.x) / 2, canvas.height * 0.75);
    shape.text("300", (divisions[2].division.body.position.x + divisions[3].division.body.position.x) / 2, canvas.height * 0.75);
    shape.text("300", (divisions[5].division.body.position.x + divisions[6].division.body.position.x) / 2, canvas.height * 0.75);
    shape.text("200", (divisions[3].division.body.position.x + divisions[4].division.body.position.x) / 2, canvas.height * 0.75);
    shape.text("200", (divisions[4].division.body.position.x + divisions[5].division.body.position.x) / 2, canvas.height * 0.75);
    if (gameState !== "end") {
    shape.text("Tries left: " + chances, canvas.width - 100, 50);
    }
    else {
        if (ball == null) {
            style.textSize(50);
            style.fillColor("blue");
            shape.rectangle(canvas.width / 2, canvas.height / 2.3, 450, 300);
            style.fillColor("#33ff14");
            shape.text("GAME OVER !", canvas.width / 2, canvas.height / 2.25);
            shape.text("Press R to Replay", canvas.width / 2, canvas.height / 1.8);
            if (input.keyWentPressed("r")) {
                score = 0;
                chances = 5;
                gameState = "play";
            }
        }
    }
    style.textSize(30);
    shape.text("Score: " + score, 100, 50);
    if (input.mousePressed("left")) {
        if (gameState !== "end" && ball == null) {
            ball = new Particle(calculator.rand(40, 600), 50);
            chances--;
        }
    }
    if (chances <= 0) {
        chances = 0;
        gameState = "end";
    }
}