import { balls } from "./index.js";
// Seleccionamos el canvas del HTML
const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

// CAMBIO 2: Para el width sería innerWidth, no innerHeight
export const width = (canvas.width = window.innerWidth);
export const height = (canvas.height = window.innerHeight);

// Genera un número aleatorio entre dos valores
export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generamos un color RGB aleatorio
export function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

export function loop() {
    // CAMBIO 3: El color de fondo tiene que ser negro, no verde
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball !== otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    }

    requestAnimationFrame(loop);
}
