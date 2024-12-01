import { Brick } from './components/brick';
import { Paddle } from './components/paddle';
import { Ball } from './components/ball';
import { CanvasView } from './view/CanvasView';

export class Collision {
    isCollidingBrick(ball: Ball, brick: Brick): boolean {
        if (
            ball.pos.x < brick.pos.x + brick.width &&
            ball.pos.x + ball.width > brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y
        ) {
            return true;
        }
        return false;
    }
    //check ball collision with bricks
    isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
        let colliding = false;
        bricks.forEach((brick, i) => {
            if (this.isCollidingBrick(ball, brick)) {

                if (ball.pos.y >= brick.pos.y + brick.height/2) {
                     //hit was from below brick
                     ball.changeYDirection();
                     ball.pos.y = brick.pos.y + brick.height + 1;
                }
                else if (ball.pos.y + ball.width <= brick.pos.y + brick.height/2) {
                    //hit was from above brick
                    ball.changeYDirection();
                    ball.pos.y = brick.pos.y - ball.width -  1;
                }
                else if (ball.pos.x < brick.pos.x) {
                    //hit was on left of brick
                    ball.changeXDirection();
                    ball.pos.x = brick.pos.x - ball.width - 1;
                }
                else if (ball.pos.x > brick.pos.x) {
                    //hit was on right of brick
                    ball.changeXDirection();
                    ball.pos.x = brick.pos.x + brick.width + 1;
                }

                if (brick.energy === 1) {
                    bricks.splice(i, 1);
                } else {
                    brick.energy -= 1;
                }
                colliding = true;
            }

        })
        return colliding;
    }


    checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
        //1. check ball collision with paddle
        if (ball.pos.x + ball.width >= paddle.pos.x &&
            ball.pos.x <= paddle.pos.x + paddle.width &&
            ball.pos.y + ball.height >= paddle.pos.y &&
            ball.pos.y + ball.height < paddle.pos.y + paddle.width/2
        ) {
            ball.changeYDirection();
            if (ball.pos.y + ball.height > paddle.pos.y) {
                ball.pos.y = paddle.pos.y - ball.width;
            }
        }
        //2. check ball collision with walls
        //ball movement x constraints
        if (ball.pos.x >= view.canvas.getBoundingClientRect().width - ball.width || ball.pos.x <= 0) {
            ball.changeXDirection();
        }

        //ball movement y constraints
        if (ball.pos.y <= 0) {
            ball.changeYDirection();
        }


    }

}