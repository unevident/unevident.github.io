import { Vector } from "../types";

export class Ball {
    public speed: Vector;
    
    constructor(
        private ballSize: number,
        private position: Vector,
        speed: number,
    ) {
        this.ballSize = ballSize;
        this.position = position;
        this.speed = {
            x: speed,
            y: -speed, //want ball to move upwards initially
        }

    }

    get width(): number {
        return this.ballSize;
    }

    get height(): number {
        return this.ballSize;
    }

    get pos(): Vector {
        return this.position;
    }

    get getSpeed(): Vector {
        return this.speed;
    }

    //methods

    changeYDirection(): void {
        this.speed.y = -this.speed.y;
    }

    changeXDirection(): void {
        this.speed.x = -this.speed.x;
    }

    moveBall(): void {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;       
    }

    setSpeed(xSpeed: number, ySpeed:number) {
        this.speed = {
            x: this.speed.x < 0 ? -xSpeed : xSpeed,
            y: this.speed.y < 0 ? -ySpeed : ySpeed
        }        
    }
}