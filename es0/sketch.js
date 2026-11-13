let tono;

function setup() {
createCanvas(800, 600);
colorMode(HSL);
tono = random(320, 350);
background(20);
}

function draw() {
    if (mouseIsPressed) {
        stroke(100);
        fill(tono, 80, 65);
        let x = mouseX;
        let y = mouseY;
        let dx = 2;
        let dy = 2;
        for (let i = 0; i < 50; i++) {
            x = x + dx;
            y = y + dy;
            let dimensione = 50 - i / 2;
            beginShape();
            for (let punta = 0; punta < 10; punta++) {
                let angolo = -HALF_PI + punta * TWO_PI / 10;
                let raggio = punta % 2 === 0 ? dimensione / 2 : dimensione / 4;
                vertex(x + cos(angolo) * raggio, y + sin(angolo) * raggio);
            }
            endShape(CLOSE);
            if (random() < 0.1) {
                dx = random(-10, 10);
                dy = random(-10, 10);
            }
        }
        if (random() < 0.02) {
            tono = random(320, 350);
        }
    }
}
