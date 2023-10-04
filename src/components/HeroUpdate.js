import { useRouter } from 'next/router';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { animations } from '../../utils/HeroAnimations';
import Skull from './Skull';
import Timer from './Timer';

function HeroUpdate() {
    let router = useRouter();

    const hallothonClipStyle = useSpring(animations.clip);
    const hallothonUpStyle = useSpring(animations.up);
    const hallothonMidLeftStyle = useSpring(animations.midLeft);
    const hallothonMidRightStyle = useSpring(animations.midRight);
    const hallothonSideLeftStyle = useSpring(animations.sideLeft);
    const hallothonSideRightStyle = useSpring(animations.sideRight);
    const hallothonInOutStyle = useSpring(animations.inOut);
    const hallothonDashLeftStyle = useSpring(animations.dashLeft);
    const hallothonDashRightStyle = useSpring(animations.dashRight);

    return (
        <div className='overflow-hidden'>
            <div className='hidden sm:block'>
                <div className='hero overflow-hidden'>
                    <div className='herogrid'>
                        <div className='top-bar'>
                            <animated.span
                                className='font-poppins stroke-red'
                                style={hallothonClipStyle}>
                                HALLO
                            </animated.span>
                        </div>
                        <animated.div
                            className='year-bar'
                            style={hallothonInOutStyle}>
                            <span>2023</span>
                        </animated.div>

                        <div className='mid-bar'>
                            <div className='hallo-mid'>
                                <animated.div
                                    className='left-box'
                                    style={
                                        hallothonDashLeftStyle
                                    }></animated.div>
                                <animated.span
                                    className='vertical-text left-vertical-hallothon'
                                    style={hallothonSideLeftStyle}>
                                    HALLOTHON
                                </animated.span>
                                <animated.span
                                    className='font-poppins'
                                    data-text='HALLO'
                                    style={hallothonMidLeftStyle}>
                                    HALLO
                                </animated.span>
                            </div>
                            <div className='thon-mid'>
                                <animated.span
                                    className='font-poppins'
                                    data-text='THON'
                                    style={hallothonMidRightStyle}>
                                    THON
                                </animated.span>
                                <animated.span
                                    className='vertical-text right-vertical-hallothon'
                                    style={hallothonSideRightStyle}>
                                    HALLOTHON
                                </animated.span>
                                <animated.div
                                    className='right-box'
                                    style={
                                        hallothonDashRightStyle
                                    }></animated.div>
                            </div>
                        </div>

                        <div className='end-bar'>
                            <div className='register'>
                                <animated.button
                                    className='register-button register-button-lg'
                                    onClick={() => {
                                        router.push('/register');
                                    }}
                                    style={hallothonInOutStyle}>
                                    REGISTER
                                </animated.button>
                            </div>
                            <div className='thon-end'>
                                <animated.span
                                    className='font-poppins stroke-red'
                                    style={hallothonClipStyle}>
                                    THON
                                </animated.span>
                            </div>
                        </div>
                    </div>

                    <div className='skull'>
                        <animated.div
                            className='glitch relative'
                            style={hallothonInOutStyle}>
                            <Skull />
                        </animated.div>
                    </div>
                </div>
                <div>
                    <Timer date={'2023/10/14 9:00:00'} />
                </div>
            </div>

            <div className='block sm:hidden h-screen'>
                <div class='mob__grid'>
                    <animated.div class='mob__header' style={hallothonUpStyle}>
                        <p>
                            <span className='font-poppins'>HALLOTHON</span>
                            <span class='mob__year'>2023</span>
                        </p>
                    </animated.div>

                    <animated.div
                        style={hallothonMidLeftStyle}
                        class='mob__hallo'>
                        HALLO
                    </animated.div>
                    <animated.div
                        style={hallothonMidRightStyle}
                        class='mob__thon'>
                        THON
                    </animated.div>
                    <div class='mob__register'>
                        <animated.button
                            style={hallothonInOutStyle}
                            className='register-button register-button-sm'
                            onClick={() => {
                                router.push('/register');
                            }}>
                            Register
                        </animated.button>
                    </div>
                    <animated.div
                        style={hallothonInOutStyle}
                        className='mob__skull'>
                        <Skull />
                    </animated.div>
                    <div className='mob__timer'>
                        <Timer date={'2023/10/20 16:00:00'} />
                    </div>
                    <div className='mob__leftbox'></div>
                </div>
            </div>
        </div>
    );
}

export default HeroUpdate;
