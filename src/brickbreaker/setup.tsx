
const canvas: HTMLElement | null = document.getElementById('gameArea');
const canvasWidth = canvas?.getBoundingClientRect().width;
const canvasHeight = canvas?.getBoundingClientRect().height;

export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;
export const BRICK_PADDING = 5;
export const BRICK_WIDTH = canvasWidth ? Math.floor((canvasWidth - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING : 100;
export const BRICK_HEIGHT = canvasHeight ? Math.floor((canvasHeight - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING : 20;
export const BRICK_ENERGY: {[key: number]: number} ={
    1: 1, //red brick
    2: 1, //green brick
    3: 2, //yellow brick
    4: 2, //blue brick
    5: 3 //purple brick
}
export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 25;
export const PADDLE_STARTX = 200;
export const PADDLE_SPEED = 10;
export const BALL_SPEED = 4;
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;

export const LEVEL = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 4, 4, 4, 4, 4, 4, 0, 0,
    0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];