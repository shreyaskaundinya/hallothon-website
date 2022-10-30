import RegisterButton from './RegisterButton';
import Skull from './Skull';
import Timer from './Timer';

function Hero() {
    return (
        <div className='w-full h-[calc(100vh-4rem)]'>
            <div className='hidden sm:block h-full'>
                <div className='absolute top-0 left-0 right-0 bottom-0 grid place-items-center'>
                    <div className='sm:w-[20%] md:w-[22%] lg:w-[23.5%]'>
                        <Skull />
                    </div>
                </div>
                <div className='h-full'>
                    <div className='h-[calc(100%-6rem)]'>
                        <h2 className='w-full main-title text-left stroke-text leading-tight pl-20'>
                            HALLO
                        </h2>
                        <h2 className='w-full main-title text-right pr-[10vw] text-6xl font-agency leading-none tracking-widest'>
                            2022
                        </h2>
                        <h2 className='w-full main-title text-center leading-tight'>
                            -
                            &nbsp;HALLO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;THON&nbsp;
                            -
                        </h2>
                        <div className='flex items-center register-button-container'>
                            <RegisterButton />
                            <h2 className='w-full main-title text-right stroke-text leading-tight pr-20'>
                                THON
                            </h2>
                        </div>
                    </div>
                    <div className='mt-auto'>
                        <Timer />
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[calc(100vh-8rem)] sm:hidden'>
                <div className='z-10 absolute skull-width top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Skull />
                </div>
                <div className='z-20 flex items-center justify-center py-10'>
                    <h2 className='flex flex-col justify-center items-center max-w-fit'>
                        <p className='text-6xl font-poppins text-center text-[#ac1b1d] leading-tight'>
                            HALLOTHON
                        </p>
                        <p className='self-end main-title text-2xl font-agency leading-none tracking-widest'>
                            2022
                        </p>
                    </h2>
                </div>

                <div className='h-full flex flex-col justify-between'>
                    <h2 className='w-full text-5xl text-left leading-tight '>
                        - HALLO
                    </h2>
                    <h2 className='w-full text-5xl text-right leading-tight '>
                        THON -
                    </h2>
                </div>

                <div className='mt-auto'>
                    <div className='z-30 mb-4 flex items-center justify-center'>
                        <RegisterButton />
                    </div>
                    <div className='font-agency'>
                        <Timer />
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======
            {/* <Timer/> */}
>>>>>>> Navbar
        </div>
    );
}
export default Hero;
