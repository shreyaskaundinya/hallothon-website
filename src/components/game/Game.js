import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import * as constants from '../../../utils/gameConstants';

// ground
let groundX = 0;

// bird
let birdX = 60;
let birdY = 120;
let birdYSpeed = 0;

// pipes
let pipeGapBottomY = constants.PIPE_HEIGHT;
let pipeX = (2 / 3) * constants.CANVAS_WIDTH;

// score
let score = 0;

// check collision between circle and rectangle
const checkCollision = (circle, rect) => {
    if (
        circle.x + circle.radius >= rect.x &&
        circle.x - circle.radius <= rect.x + rect.width
    ) {
        if (
            circle.y + circle.radius >= rect.y &&
            circle.y - circle.radius <= rect.y + rect.height
        ) {
            // TODO: IMPROVE COLLISION CHECK
            return true;
        }
    }
    return false;
};

// check if bird has touched a pipe
const touchedPipe = () => {
    const birdHitbox = {
        x: birdX + constants.WITCH_WIDTH / 2,
        y: birdY + constants.WITCH_HEIGHT / 2 + 5,
        radius: 20,
    };

    const upperPipe = {
        x: pipeX,
        y: 0,
        width: constants.PIPE_WIDTH,
        height: pipeGapBottomY,
    };

    const lowerPipe = {
        x: pipeX,
        y: pipeGapBottomY + constants.PIPE_GAP,
        width: constants.PIPE_WIDTH,
        height:
            constants.CANVAS_HEIGHT -
            constants.HEIGHT_GROUND -
            (pipeGapBottomY + constants.PIPE_GAP),
    };

    return (
        checkCollision(birdHitbox, upperPipe) ||
        checkCollision(birdHitbox, lowerPipe)
    );
};

// check if bird has touched the ground
const fallOut = () =>
    birdY + constants.WITCH_HEIGHT >
    constants.CANVAS_HEIGHT - constants.HEIGHT_GROUND;

// stop game
const reset = () => {
    hasStarted = false;
    hasFinished = true;
};

let hasStarted = false;
let hasFinished = false;
let canGetScore = true;

function Game() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const canvas = useRef(null);
    const [CLOUDS, setCLOUDS] = useState(null);
    const [WITCH, setWITCH] = useState(null);
    const [GROUND, setGROUND] = useState(null);
    const [score, setScore] = useState(0);
    const [jumpSpeed, setJumpSpeed] = useState(-900);
    const [fallSpeed, setFallSpeed] = useState(-16000);
    const [speed, setSpeed] = useState(8);

    useEffect(() => {
        if (window.innerWidth < 1200) {
            setJumpSpeed(() => -750);
            setFallSpeed(() => -6000);
            setSpeed(() => 2);
        }
    }, []);

    // bird jump
    const jump = () => {
        if (hasFinished) {
            return;
        }
        if (!hasStarted) {
            hasStarted = true;
        }
        birdYSpeed = jumpSpeed;
    };

    // enable space button
    const handler = (e) => {
        if (hasFinished) {
            return;
        }
        if (e.code === 'KeyW') {
            if (!hasStarted) {
                hasStarted = true;
            }
            jump();
        }
    };

    useEffect(() => {
        const c = new Image();
        c.src = constants.CLOUDS_SRC;
        c.onload = () => {
            setCLOUDS(c);
        };
        const g = new Image();
        g.src = constants.GROUND_SRC;
        g.onload = () => {
            setGROUND(g);
        };
        const w = new Image();
        w.src = constants.WITCH_SRC;
        w.onload = () => {
            setWITCH(w);
        };
    }, []);

    const draw = (context) => {
        // draw background
        context.fillStyle = '#ff8a47';
        context.fillRect(0, 0, constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);

        // draw clouds

        // draw ground
        context.drawImage(
            CLOUDS,
            constants.CLOUDS_X,
            constants.CLOUDS_Y,
            constants.CLOUDS_WIDTH,
            constants.CLOUDS_HEIGHT
        );

        context.drawImage(
            GROUND,
            groundX,
            constants.GROUND_Y,
            constants.GROUND_WIDTH,
            constants.GROUND_HEIGHT
        );
        context.drawImage(
            GROUND,
            groundX + constants.CANVAS_WIDTH,
            constants.GROUND_Y,
            constants.GROUND_WIDTH,
            constants.GROUND_HEIGHT
        );

        // draw bird
        context.drawImage(
            WITCH,
            birdX,
            birdY,
            constants.WITCH_WIDTH,
            constants.WITCH_HEIGHT
        );

        // draw pipes
        context.fillStyle = '#000';
        context.fillRect(pipeX, 0, constants.PIPE_WIDTH, pipeGapBottomY);
        context.fillRect(
            pipeX,
            pipeGapBottomY + constants.PIPE_GAP,
            constants.PIPE_WIDTH,
            constants.CANVAS_HEIGHT -
                constants.HEIGHT_GROUND -
                (pipeGapBottomY + constants.PIPE_GAP)
        );
    };

    const refreshGame = () => {
        hasStarted = false;
        hasFinished = false;
        canGetScore = true;
        groundX = 0;
        birdX = 60;
        birdY = 120;
        birdYSpeed = 0;
        pipeGapBottomY = constants.PIPE_HEIGHT;
        pipeX = (2 / 3) * constants.CANVAS_WIDTH;
        setScore(0);
        // router.reload();
    };

    useEffect(() => {
        if (canvas.current) {
            const context = canvas.current.getContext('2d');
            if (context && CLOUDS && GROUND && WITCH) {
                setInterval(() => {
                    // dying
                    if (touchedPipe() || fallOut()) {
                        setShowModal(true);
                        reset();
                    }

                    // check if we should give another score
                    if (canGetScore && birdX > pipeX + constants.PIPE_WIDTH) {
                        canGetScore = false;
                        setScore((s) => s + 1);
                    }

                    draw(context);

                    if (!hasStarted) {
                        return;
                    }

                    // reset pipes
                    if (pipeX < -constants.PIPE_WIDTH) {
                        pipeX = constants.CANVAS_WIDTH;
                        pipeGapBottomY = constants.PIPE_GAP * Math.random();
                        canGetScore = true;
                    }

                    // reset ground
                    if (groundX <= -constants.CANVAS_WIDTH) {
                        groundX = 0;
                    }

                    // draw scores
                    // context.fillStyle = 'black';
                    // context.font = '26px Roboto';
                    // context.fillText(
                    //     score.toString(),
                    //     constants.CANVAS_WIDTH / 2 - 15,
                    //     50
                    // );

                    // movements
                    pipeX -= speed;
                    groundX -= speed;
                    birdY += birdYSpeed * (constants.INTERVAL / 1000);
                    birdYSpeed -= fallSpeed * (constants.INTERVAL / 1000);
                }, constants.INTERVAL);
            }
        }
    }, [CLOUDS, GROUND, WITCH]);

    return (
        <div className='my-40 overflow-hidden' onClick={jump} onKeyUp={handler}>
            <div className='max-w-7xl mx-auto mb-4'>
                <h1 className='text-6xl md:text-step-8'>Bored?</h1>
            </div>
            <div className='max-w-7xl mx-auto bg-gray-600 py-6'>
                <canvas
                    className='mx-auto'
                    ref={canvas}
                    width={constants.CANVAS_WIDTH}
                    height={constants.CANVAS_HEIGHT}
                />
            </div>
            <div className='max-w-xl mx-4 sm:mx-auto rounded-lg px-8 py-2 border border-hallored my-4'>
                <div className=' text-step-2 flex justify-between items-center'>
                    <h1 className=''>Score : {score}</h1>
                    <button
                        className='px-8 py-1 bg-green-500 rounded-full'
                        onClick={refreshGame}>
                        Refresh
                    </button>
                </div>
                <div className='border-t border-white my-4 py-4'>
                    <p className='text-step-1'>
                        Game Ported from :{' '}
                        <a
                            target='_blank'
                            className='underline text-blue-700'
                            href='https://github.com/paunil/flappy-bird'>
                            paunil/flappy-bird
                        </a>
                    </p>
                    <h4 className='text-step-2 font-bold'>
                        Things to remember :
                    </h4>
                    <p className='text-step-1'>
                        Click on the Game Screen to start the game
                    </p>
                    <p className='text-step-1'>
                        Click Refresh to refresh the game
                    </p>
                    <p className='text-step-1'>
                        Use 'W' or Mouse Click to move the witch
                    </p>
                    <p className='text-step-1'>
                        Game broken?{' '}
                        <button
                            className='underline text-blue-700'
                            onClick={() => {
                                router.reload();
                            }}>
                            Click here to refresh page
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Game;
