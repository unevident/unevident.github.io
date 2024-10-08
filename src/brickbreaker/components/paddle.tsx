import { Vector } from "../types";

export class Paddle {
    private moveLeft: boolean;
    private moveRight: boolean;

    constructor(
        private speed: number,
        private paddleWidth: number,
        private paddleHeight: number,
        private position: Vector,

    ) {
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.moveLeft = false;
        this.moveRight = false;
        
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);

    }

    get width(): number {
        return this.paddleWidth;
    }

    get height(): number {
        return this.paddleHeight;
    }

    get pos(): Vector {
        return this.position;
    }

    get isMovingLeft(): boolean {
        return this.moveLeft;
    }

    get isMovingRight(): boolean {
        return this.moveRight;
    }

    movePaddle(): void {
        if (this.moveLeft) this.pos.x -= this.speed;
        if (this.moveRight) this.pos.x += this.speed;
    }

    handleKeyUp = (e: KeyboardEvent): void => {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
            this.moveLeft = false;
            console.log('left key lifted up');
        }
        if (e.code === "ArrowRight" || e.key === "ArrowRight") {
            this.moveRight = false;
            console.log('right key lifted up');
        };
    }

    handleKeyDown = (e: KeyboardEvent): void => {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
            this.moveLeft = true;
        };
        if (e.code === "ArrowRight" || e.key === "ArrowRight") {
            this.moveRight = true;

        };
    }
}