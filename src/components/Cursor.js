import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

function Cursor() {
    const [cursorPoint, setCursorPoint] = useState([0, 0]);
    const [mousedown, setMouseDown] = useState(false);

    const cursorStyles = useSpring({
        left: cursorPoint[0],
        top: cursorPoint[1],
        scale: mousedown ? 0.5 : 1,
    });

    useEffect(() => {
        let timer;
        const handleMouseMove = (e) => {
            console.log(e);
            setCursorPoint(() => [e.clientX - 12, e.clientY - 12]);
        };

        const handleMouseDown = (e) => {
            setMouseDown(() => true);
        };
        const handleMouseUp = (e) => {
            setMouseDown(() => false);
        };

        if (process.browser) {
            setCursorPoint([
                window.innerWidth / 2 - 12,
                window.innerHeight / 2 - 12,
            ]);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);

            return () => {
                clearTimeout(timer);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, []);

    return (
        <animated.div
            className='fixed w-6 h-6 rounded-full bg-hallored shadow-xl z-[10000] pointer-events-none hidden sm:inline-block'
            style={cursorStyles}></animated.div>
    );
}

export default Cursor;
