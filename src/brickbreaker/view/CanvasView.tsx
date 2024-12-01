import { Ball } from "../components/ball";
import { Brick } from "../components/brick";
import { Paddle } from "../components/paddle";

export class CanvasView {
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLElement | null;
    private start: HTMLElement | null;
    private info: HTMLElement | null;

    constructor(canvas: HTMLCanvasElement, ctx:CanvasRenderingContext2D, scoreDisplay:HTMLElement | null, start:HTMLElement | null, info:HTMLElement | null) {
        this.canvas = canvas;
        this.context = ctx;
        this.scoreDisplay = scoreDisplay;
        this.start = start;
        this.info = info;
        this.canvas.height = this.canvas.getBoundingClientRect().height;
        this.canvas.width = this.canvas.getBoundingClientRect().width;
    }

    clear(): void {
        this.context?.clearRect(0, 0, this.canvas.getBoundingClientRect().width, this.canvas.getBoundingClientRect().height);
    }

    initStartButton(startFunction: (view: CanvasView) => void): void {
        this.start?.addEventListener('click', () => startFunction(this));
    }

    drawScore(score: number): void {
        if (this.scoreDisplay) {
            this.scoreDisplay.innerHTML = score.toString();
        }
    }

    drawInfo(text: string): void {
        if (this.info) {
            this.info.innerHTML = text;
        }
    }

    drawComponent(brick: Brick):void {
        if (!brick) return;

        if (this.context != null) {
            switch (brick.energy) {
                case 1:
                    this.context.fillStyle = 'red';
                    break;
                case 2:
                    this.context.fillStyle = 'green';
                    break;
                case 3:
                    this.context.fillStyle = 'yellow';
                    break;
                case 4:
                    this.context.fillStyle = 'blue';
                    break;
                case 5:
                    this.context.fillStyle = 'purple';
                    break;
            }
        }
        this.context?.fillRect(
            brick.pos.x,
            brick.pos.y,
            brick.width,
            brick.height
        )
    }

    drawBricks(bricks: Brick[]): void {
        bricks.forEach(brick => this.drawComponent(brick));
    }

    drawPaddle(paddle: Paddle): void {
        if (this.context != null) {
            this.context.fillStyle = 'white';
            
        }
        this.context?.fillRect(
            paddle.pos.x,
            paddle.pos.y,
            paddle.width,
            paddle.height
        )
    }

    drawBall(ball: Ball): void {
        if (this.context != null) {
            this.context.fillStyle = 'white';
        }

        this.context?.beginPath();
        this.context?.arc(ball.pos.x, ball.pos.y, (ball.width + 10)/ 2, 0, 2 * Math.PI);
        this.context?.fill();

    }


}