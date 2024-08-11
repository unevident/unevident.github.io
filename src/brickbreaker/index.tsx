
// import { CanvasView } from "./view/CanvasView";
// import { Ball } from "./components/ball"
// import { Brick } from "./components/brick";
// import { Paddle } from "./components/paddle";
// import { useEffect, useRef } from "react";

// //level and colors
// import {
//     PADDLE_SPEED,
//     PADDLE_WIDTH,
//     PADDLE_HEIGHT,
//     PADDLE_STARTX,
//     BALL_SPEED,
//     BALL_SIZE,
//     BALL_STARTX,
//     BALL_STARTY
// } from './setup';

// //helpers
// import { createBricks } from "./helpers";

// let gameOver = false;
// let score = 0;

// function setGameOver(view: CanvasView) {
//     view.drawInfo('Game Over!');
//     gameOver = false;
// }

// function setGameWin(view:CanvasView) {
//     view.drawInfo('You win!');
//     gameOver = false;
// }

// function gameLoop(
//     view: CanvasView,
//     bricks: Brick[],
//     // paddle: Paddle,
//     // ball: Ball,
// ) {
//     view.clear();
//     view.drawBricks(bricks);
//     requestAnimationFrame(() => gameLoop(view, bricks));
//     //collision logic here
// }

// function startGame(view:CanvasView) {
//     //reset display
//     score = 0;
//     view.drawInfo('');
//     view.drawScore(0);

//     //create all bricks
//     const bricks = createBricks();

//     gameLoop(view, bricks);
// }

// const view = new CanvasView('#gameArea');
// view.initStartButton(startGame);