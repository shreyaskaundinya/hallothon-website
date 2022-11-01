import { useRouter } from 'next/router';
import React from 'react';
import Skull from './Skull';
import Timer from './Timer';
function HeroUpdate() {
    let router = useRouter();
    return (
        <>
            <div className='hidden sm:block'>
                <div className='hero overflow-hidden'>
                    <div className='herogrid'>
                        <div className='top-bar'>
                            <span className='font-poppins stroke-red'>HALLO</span>
                        </div>
                        <div className='year-bar'>
                            <span>2022</span>
                        </div>

                        <div className='mid-bar'>
                            <div className='hallo-mid'>
                                <div className='left-box'></div>
                                <span className='vertical-text left-vertical-hallothon'>
                                    HALLOTHON
                                </span>
                                <span
                                    className='font-poppins'
                                    data-text='HALLO'>
                                    HALLO
                                </span>
                            </div>
                            <div className='thon-mid'>
                                <span className='font-poppins' data-text='THON'>
                                    THON
                                </span>
                                <span className='vertical-text right-vertical-hallothon'>
                                    HALLOTHON
                                </span>
                                <div className='right-box'></div>
                            </div>
                        </div>

                        <div className='end-bar'>
                            <div className='register'>
                                <button className='register-button register-button-lg'  onClick={()=>{router.push('/register')}}>
                                    REGISTER
                                </button>
                            </div>
                            <div className='thon-end'>
                                <span className='font-poppins stroke-red'>
                                    THON
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='skull'>
                        <div className='glitch relative'>
                            <Skull />
                        </div>
                    </div>
                </div>
                <div>
                    <Timer />
                </div>
            </div>

            <div className='block sm:hidden h-screen'>
                {/* <div className='flex flex-col bg-green-400 bg-opacity-60'>
                    <div className='flex-1 flex flex-col justify-between'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex flex-col'>
                                    <p className='font-poppins text-step-11 font-extrabold'>
                                        HALLOTHON
                                    </p>
                                    <p className='self-end font-agency'>2022</p>
                                </div>
                            </div>
                            <p className='text-step-10 pl-12 font-extrabold stroke'>
                                HALLO
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-step-10 stroke font-extrabold pr-12 text-right'>THON</p>
                            <p>Register</p>
                        </div>
                    </div>
                    <div>
                        <Timer />
                    </div>
                </div> */}
                <div class='mob__grid'>
                    <div class='mob__header'>
                        <p>
                            <span className="font-poppins">HALLOTHON</span>
                            <span class='mob__year'>2022</span>
                        </p>
                    </div>

                    <div class='mob__hallo'>HALLO</div>
                    <div class='mob__thon'>THON</div>
                    <div class='mob__register'>
                        <button className='register-button register-button-sm' onClick={()=>{router.push('/register')}}>Register</button>
                    </div>
                    <div className='mob__skull'>
                        <Skull />
                    </div>
                    <div className="mob__timer">
                        <Timer />
                    </div>
                    <div className="mob__leftbox"></div>
                </div>
            </div>
        </>
    );
}

export default HeroUpdate;
