import { ctx } from "./canvas-setup.js";
import { width } from "./canvas-setup.js";
import { height } from "./canvas-setup.js";
import { randomRGB } from "./canvas-setup.js";

// Clase Ball con todos sus atributos
export class Ball {
    constructor(x, y, velX, velY, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = randomRGB();
        this.size = size;
    }

    // Dibuja la bola
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        // CAMBIO 1: Math.PI no lleva paréntesis
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Actualiza la posición de la bola
    update() {
        if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
            this.velX = -this.velX;
        }

        if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    // Gestiona las colisiones entre bolas para que cambien de color
    collisionDetect(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + otherBall.size) {
            otherBall.color = this.color = randomRGB();
        }
    }
}