import RegisterButton from './RegisterButton';
import Skull from './Skull';
import Timer from './Timer';
import {useRouter} from 'next/router'

function Hero() {
    const router = useRouter()
    const handleRegister = () => {
        console.log("Register!!"); 
        // router.push('/register')/
    }
    return (
        <div className='w-full h-[calc(100vh-4rem)]'>
            <div className='hidden md:block h-full'>
                <div className='absolute top-0 left-0 right-0 bottom-0 grid place-items-center z-[1]'>
                    <div className='sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-[20%]'>
                        <Skull />
                    </div>
                </div>
                <div className='h-full'>
                    <div className='h-[calc(100%-6rem)]'>
                        <p className='w-full main-title text-left stroke-text leading-tight pl-20'>
                            HALLO
                        </p>
                        <p className='w-full text-right pr-[10vw] text-8xl font-agency leading-none tracking-widest'>
                            2023
                        </p>
                        <p className='w-full sub-title leading-tight flex justify-between px-20'>
                            <span>-HALLO</span>
                            <span>THON-</span>
                        </p>
                        <div className='flex items-center register-button-container'>
                            <div className='flex flex-col gap-2 -z-30'>
                                <RegisterButton />
                            </div>
                            <p className='w-full main-title text-right stroke-text leading-tight pr-20'>
                                THON
                            </p>
                        </div>
                    </div>
                    <div className='mt-auto'>
                        <Timer />
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-[calc(100vh-8rem)] md:hidden'>
                <div className='z-10 absolute skull-width top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Skull />
                </div>
                <div className='z-20 flex items-center justify-center py-10'>
                    <h2 className='flex flex-col justify-center items-center max-w-fit'>
                        <p className='text-6xl font-poppins text-center text-[#ac1b1d] leading-tight'>
                            HALLOTHON
                        </p>
                        <p className='self-end main-title text-2xl font-agency leading-none tracking-widest'>
                            2023
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
                    <div className='mb-4 flex items-center justify-center -z-10'>
                        <RegisterButton/>
                    </div>
                    <div className='font-agency'>
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;
