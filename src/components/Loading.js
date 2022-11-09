import React from 'react';
import { animated } from 'react-spring';

function Loading({ loading, count }) {
    // const animatedStyle = useSpring({ to: { opacity: loading ? 1 : 0 } });

    return (
        <animated.div className='loading'>
            <p className='loading__header'>LOADING</p>
        </animated.div>
    );
}

export default Loading;
