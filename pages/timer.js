import Image from 'next/image';
import { useEffect, useState } from 'react';
import { announcements } from '../utils/announcements';

function Timer() {
    const [timeup, setTimeup] = useState(false);

    const calculateTimeLeft = () => {
        const difference = new Date('2022/11/12 15:00:00') - new Date();
        let timeLeft = [];

        if (difference > 0) {
            timeLeft = [
                Math.floor(difference / (1000 * 60 * 60 * 24)),
                Math.floor((difference / (1000 * 60 * 60)) % 24),
                Math.floor((difference / 1000 / 60) % 60),
                Math.floor((difference / 1000) % 60),
            ];
            return timeLeft;
        } else {
            setTimeup(() => true);
            if (props.setDone) {
                props.setDone(() => true);
            }
        }
    };

    const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0]);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            <h1 className='text-center text-step-9 font-extrabold font-agency'>
                Hallothon 2022
            </h1>
            <h2 className='text-center text-step-6'>
                VISIT :{' '}
                <span className='font-bold'>cse-hallothon.tech/timer</span> (For
                Timer and Announcements)
            </h2>
            <div className='grid grid-flow-col grid-cols-3 items-center justify-center p-8 gap-6'>
                <div className='grid place-items-center border-4 border-hallored h-full p-6'>
                    <Image
                        src='/assets/pes.svg'
                        alt='PES'
                        width={109 * 2}
                        height={34 * 2}
                    />
                </div>
                <div className='grid place-items-center border-4 border-hallored h-full p-6'>
                    <Image
                        src='/assets/hallothon_logo.svg'
                        alt='Hallothon'
                        height={156}
                        width={269}
                        className='hallothon-logo'
                    />
                </div>
                <div className='grid place-items-center border-4 border-hallored h-full p-6'>
                    <Image
                        src='/assets/cloudera-orange-logo.png'
                        alt='Cloudera'
                        height={91}
                        width={368}
                    />
                </div>
            </div>
            <div className='flex justify-evenly items-center overflow-hidden'>
                {timeup ? (
                    <p>Time is up!</p>
                ) : (
                    <>
                        <div>
                            <span className='text-step-9 pr-2'>
                                {timeLeft[0] < 10
                                    ? '0' + timeLeft[0]
                                    : timeLeft[0]}
                            </span>
                            <span className='text-step-6'>
                                <span className='hidden lg:visible lg:inline'>
                                    Days
                                </span>
                                <span className='visible lg:hidden'>D</span>
                            </span>
                        </div>
                        <div>
                            <span className='text-step-9 pr-2'>
                                {timeLeft[1] < 10
                                    ? '0' + timeLeft[1]
                                    : timeLeft[1]}
                            </span>
                            <span className='text-step-6'>
                                <span className='hidden lg:visible lg:inline'>
                                    Hours
                                </span>
                                <span className='visible lg:hidden'>H</span>
                            </span>
                        </div>
                        <div>
                            <span className='text-step-9 pr-2'>
                                {timeLeft[2] < 10
                                    ? '0' + timeLeft[2]
                                    : timeLeft[2]}
                            </span>
                            <span className='text-step-6'>
                                <span className='hidden lg:visible lg:inline'>
                                    Minutes
                                </span>
                                <span className='visible lg:hidden'>M</span>
                            </span>
                        </div>
                        <div>
                            <span className='text-step-9 pr-2'>
                                {timeLeft[3] < 10
                                    ? '0' + timeLeft[3]
                                    : timeLeft[3]}
                            </span>
                            <span className='text-step-6'>
                                <span className='hidden lg:visible lg:inline'>
                                    Seconds
                                </span>
                                <span className='visible lg:hidden'>S</span>
                            </span>
                        </div>
                    </>
                )}
            </div>

            <div className='text-white max-w-4xl mx-auto py-20'>
                <h2 className='text-step-5 text-center font-bold'>
                    Announcements
                </h2>
                <div className='flex flex-col gap-2 font-poppins py-8'>
                    {announcements.map((a) => {
                        return (
                            <div className='border p-4'>
                                <p className='text-xl font-bold'>{a.title}</p>
                                <br />
                                <p>{a.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Timer;
