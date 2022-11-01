import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useMeasure } from 'react-use';

function FaqCard({ q, ans }) {
    const defaultHeight = '0px';
    const [open, setOpen] = useState(false);
    const [ref, { height }] = useMeasure();
    const [contentHeight, setContentHeight] = useState(defaultHeight);

    const handleClick = (e) => {
        e.preventDefault();
        setOpen((prev) => !prev);
    };

    const expand = useSpring({
        config: { friction: 10 },
        height: open ? `${contentHeight}px` : defaultHeight,
        opacity: open ? 1 : 0,
    });

    const content = useSpring({
        height: open ? `${contentHeight}px` : defaultHeight,
    });

    useEffect(() => {
        setContentHeight(height);

        window.addEventListener('resize', setContentHeight(height));

        return window.removeEventListener('resize', setContentHeight(height));
    }, [height]);

    return (
        <div className='faq__quest' onClick={handleClick}>
            <button type='button' className='' onClick={handleClick}>
                <a className='faq__arrow'>&#10148;</a> {q}
            </button>
            <animated.div style={expand} className='faq__ans '>
                <div ref={ref} className='pointer-events-none'>
                    {ans}
                </div>
            </animated.div>
        </div>
    );
}

export default FaqCard;
