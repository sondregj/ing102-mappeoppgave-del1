// Sondre Gjellestad | 2017

// Setup-funksjonen kjøres før alt annet i skriptet og initialiserer.
function setup() {

    // Oppretter Canvas
    canvas = createCanvas(windowWidth, windowHeight, P2D);
    canvas.parent('canvas-home');

    // Setter innstilling for penn
    strokeWeight(5);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(50);

    // Oppretter prikker i bakgrunn
    var w = windowWidth / 16;
    var h = windowHeight / 16;
    dots = [];
    var total = 0;
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            dots[total] = new Dot(i, j);
            total++;
        }
    }

    // Oppretter partikkelobjekter
    particles = [];
    for (var i = 0; i < 10; i++) {
        particles[i] = new Particle();
    }

    // Setter bakgrunn for første ramme i animasjonen
    background(255);
}


class Particle {
    constructor(x, y) {

        this.speed = 0.5;
        this.pos = createVector(random(0, width), random(0, height));
        this.vel = createVector(random(-this.speed, this.speed), random(-this.speed, this.speed));
    
        this.edgeOffset = 25;

        // Dersom parametrene for funksjonen var definert blir de iverksatt
        if (x !== undefined && y !== undefined) {
            this.pos.x = x;
            this.pos.y = y;
        }
    }

    edges() {
        if (this.pos.x < -this.edgeOffset) {
            this.pos.x = width + this.edgeOffset;
        }
        if (this.pos.x > width + this.edgeOffset) {
            this.pos.x = -this.edgeOffset;
        }
        if (this.pos.y < -this.edgeOffset) {
            this.pos.y = height;
        }
        if (this.pos.y > height + this.edgeOffset) {
            this.pos.y = -this.edgeOffset;
        }
    }

    update() {
        this.pos.add(this.vel);
    }

    render() {
        for (var i = 0; i < particles.length; i++) {
            if (dist(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y) < 150) {
                strokeWeight(1);
                line(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y);
            }
        }
        strokeWeight(16);
        point(this.pos.x, this.pos.y);
    }
}


class Dot {
    constructor(i, j) {
        this.pos = createVector(i, j);
    }

    render() {
        point(32 * this.pos.x + 16, 32 * this.pos.y + 16);
    }
}

function draw() {
    background(36);

    // Tegner prikker
    stroke(255);
    strokeWeight(1);
    for (var i = 0; i < dots.length; i++) {
        dots[i].render();
    }

    // Oppdaterer og tegner partikler
    stroke(200, 33, 55);
    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].edges();
        particles[i].render();
    }
}

// Ved museklikk legges det til en partikkel på musens posisjon
function mouseClicked() {
    if (particles.length <= 50) {
        particles.push(new Particle(mouseX, mouseY));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    var w = windowWidth / 16;
    var h = windowHeight / 16;
    dots = [];
    var total = 0;
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            dots[total] = new Dot(i, j);
            total++;
        }
    }
}