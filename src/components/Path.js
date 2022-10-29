import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

function Path({ children, toggle, randHue, opacity = 0.7, ...props }) {
    const delay = Math.random() * 400;
    const [hue, setHue] = useState(0);
    const [randId, setRandId] = useState(0);

    useEffect(() => {
        setHue(Math.random() * 360);

        setRandId(Math.trunc(Math.random() * 2400));

        const handleHue = () => {
            setHue(() => 0);
        };

        const timeout = setTimeout(handleHue, 300);

        () => {
            clearTimeout(timeout);
        };
    }, []);

    const animatedStyle = useSpring({
        to: {
            opacity: toggle ? Number(opacity) : 0,
            filter: `hue-rotate(${hue}deg)`,
        },
        delay: delay,
    });

    // const x = useMemo(() => {
    //     return ['#FFAEA8', '#FFE4E0', '#FF9E98'];
    // }, []);

    return (
        <animated.path
            style={
                props.fill === '#111111'
                    ? animatedStyle
                    : { opacity: animatedStyle.opacity }
            }
            {...props}>
            {children}
        </animated.path>
    );
}

export default Path;
