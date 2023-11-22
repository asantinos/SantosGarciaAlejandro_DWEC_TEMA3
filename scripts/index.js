import { Ball } from "./ball-class.js";
import { width } from "./canvas-setup.js";
import { height } from "./canvas-setup.js";
import { random } from "./canvas-setup.js";
import { loop } from "./canvas-setup.js";

// Creamos arary donde se guardarán las bolas
export const balls = [];

// Metemos bolas al array
while (balls.length < 4) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size
    );

    balls.push(ball);
}

loop();
