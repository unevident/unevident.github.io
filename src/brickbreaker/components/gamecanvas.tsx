import { forwardRef } from 'react';

const GameCanvas = forwardRef<HTMLCanvasElement>((props, ref) => {
    return (
        <div>
            <canvas className='bg-black' ref={ref} id='gameArea' {...props} ></canvas>
            <div id='display'>
                <div id='score'></div>
                <button id='start' className="border border-black">Start</button>
                <br></br>
                <div id='info'>Press play. Use the arrow keys to control the paddle.</div>
            </div>
        </div>
    )
})
export default GameCanvas