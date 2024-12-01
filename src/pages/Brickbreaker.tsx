// import '../brickbreaker/brickbreaker.css'
import GameCanvas from '../brickbreaker/components/gamecanvas';
import ArrowButton from '../brickbreaker/components/arrowbutton';
import Arrow from '../brickbreaker/components/arrow';
// import '../brickbreaker/index';
import { useRef, useEffect, useState } from 'react';
import { CanvasView } from "../brickbreaker/view/CanvasView";
import { Ball } from "../brickbreaker/components/ball"
import { Brick } from "../brickbreaker/components/brick";
import { Paddle } from "../brickbreaker/components/paddle";
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from '../brickbreaker/setup';
import { Collision } from '../brickbreaker/Collision';

    //helpers
import { createBricks } from "../brickbreaker/helpers";

export function Brickbreaker() {
    const [ballSpeed, setBallSpeed] = useState(BALL_SPEED)
    let gameStart = false;
    let gameOver = false;
    let score = 0;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    function setGameOver(view: CanvasView) {
        view.drawInfo('Game Over!');
        gameOver = false;
        gameStart = false;
    }
    
    function setGameWin(view: CanvasView) {
        view.drawInfo('You win!');
        gameOver = false;
        gameStart = false;
    }
    
    function gameLoop(
        view: CanvasView,
        bricks: Brick[],
        paddle: Paddle,
        ball: Ball,
        collision: Collision
    ) {
        view.clear();
        view.drawBricks(bricks);
        view.drawPaddle(paddle);
        view.drawBall(ball);

        if (!gameStart) {

        }

        //move ball
        ball.moveBall();

        //Move paddle and check so it won't exit playing field
        if ( (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.getBoundingClientRect().width - paddle.width) ) {
        paddle.movePaddle();
    }
    collision.checkBallCollision(ball, paddle, view);
    const collidingBrick = collision.isCollidingBricks(ball, bricks);
    
    if (collidingBrick) {
        score += 1;
        view.drawScore(score);
    }

    //game over when ball leaves playing area
    if (ball.pos.y > view.canvas.height) {
        gameOver = true;
    }

    //if game won, set gameOver and display win
    if (bricks.length === 0) return setGameWin(view);
    //return if gameover and stop running requestanimationframe

    if (gameOver) return setGameOver(view);

    requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));

    }
    
    function startGame(view:CanvasView) {
        //reset display
        score = 0;
        view.drawInfo('');
        view.drawScore(0);

        //create collision instance
        const collision = new Collision();
    
        //create all bricks
        const bricks = createBricks();
        //create ball
        const ball = new Ball(
            BALL_SIZE,
            {
                x: BALL_STARTX,
                y: BALL_STARTY
            },
            ballSpeed
        )
        //create paddle
        const paddle = new Paddle(
            PADDLE_SPEED,
            PADDLE_WIDTH,
            PADDLE_HEIGHT,
            {
                x: PADDLE_STARTX,
                y: view.canvas.getBoundingClientRect().height - PADDLE_HEIGHT - 5
            },
        )

    
        gameLoop(view, bricks, paddle, ball, collision);
    }
    

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.height = 500;
        canvas.width = 1000;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const scoreDisplay = document.getElementById('score');
        const start = document.getElementById('start');
        const info = document.getElementById('info');
        const view = new CanvasView(canvas, ctx, scoreDisplay, start, info);
        view.initStartButton(startGame);

    }, [canvasRef, ballSpeed])



    

    return (
        <div>
            <div>
                <title>Brick Breaker Page</title>
                <meta name="viewport" content="width-device-width, initial-scale-1.0" />
            </div>

            <div className="flex-col justify-center m-0 max-h-screen md:flex md:items-start ">
                
            <GameCanvas ref={canvasRef} />
            <label htmlFor="ballSpeed">Ball speed: {ballSpeed}</label>
            <input id="ballSpeed" type="range" min={1} max={5} step={1} value={ballSpeed} onChange={(e) => setBallSpeed(parseInt(e.target.value))}/>
            </div>
            <div className="flex mt-8 justify-center w-auto">
                <ArrowButton direction="ArrowLeft" children={Arrow("ArrowLeft")}/>
                <ArrowButton direction="ArrowRight" children={Arrow("ArrowRight")} />
            </div>
        </div>
    )
}