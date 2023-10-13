import { useEffect, useState } from 'react';

export default function TimerAlt(props) {
    const [timeup, setTimeup] = useState(false);

    const calculateTimeLeft = () => {
        const difference = new Date(props.date) - new Date();
        let timeLeft = [];

        if (difference > 0) {
            timeLeft = [
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
        <div className='bg-black timer-container flex justify-evenly items-center h-24 sm:h-24 overflow-hidden'>
            {timeup ? (
                <p>Time is up!</p>
            ) : (
                <>
                    {/* <div>
                        <span className='text-step-0 md:text-step-4 pr-2'>
                            {timeLeft[0] < 10 ? '0' + timeLeft[0] : timeLeft[0]}
                        </span>
                        <span className='text-step-2'>
                            <span className='hidden lg:visible lg:inline'>
                                Days
                            </span>
                            <span className='visible lg:hidden'>D</span>
                        </span>
                    </div> */}
                    <div>
                        <span className='text-step-0 md:text-step-4 pr-2'>
                            {timeLeft[0] < 10 ? '0' + timeLeft[0] : timeLeft[0]}
                        </span>
                        <span className='text-step-2'>
                            <span className='hidden lg:visible lg:inline'>
                                Hours
                            </span>
                            <span className='visible lg:hidden'>H</span>
                        </span>
                    </div>
                    <div>
                        <span className='text-step-0 md:text-step-4 pr-2'>
                            {timeLeft[1] < 10 ? '0' + timeLeft[1] : timeLeft[1]}
                        </span>
                        <span className='text-step-2'>
                            <span className='hidden lg:visible lg:inline'>
                                Minutes
                            </span>
                            <span className='visible lg:hidden'>M</span>
                        </span>
                    </div>
                    <div>
                        <span className='text-step-0 md:text-step-4 pr-2'>
                            {timeLeft[2] < 10 ? '0' + timeLeft[2] : timeLeft[2]}
                        </span>
                        <span className='text-step-2'>
                            <span className='hidden lg:visible lg:inline'>
                                Seconds
                            </span>
                            <span className='visible lg:hidden'>S</span>
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}

