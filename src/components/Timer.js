import { useEffect, useState } from 'react';

function Timer() {
    const calculateTimeLeft = () => {
        const difference = new Date('2022/11/09 23:59:59') - new Date();
        let timeLeft = [];

        if (difference > 0) {
            timeLeft = [
                Math.floor(difference / (1000 * 60 * 60 * 24)),
                Math.floor((difference / (1000 * 60 * 60)) % 24),
                Math.floor((difference / 1000 / 60) % 60),
                Math.floor((difference / 1000) % 60),
            ];
        }

        return timeLeft;
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
            <div>
                <span className='pr-2'>
                    {timeLeft[0] < 10 ? '0' + timeLeft[0] : timeLeft[0]}
                </span>
                <span className='hidden lg:visible lg:inline'>Days</span>
                <span className='visible lg:hidden'>D</span>
            </div>
            <div>
                <span className='pr-2'>
                    {timeLeft[1] < 10 ? '0' + timeLeft[1] : timeLeft[1]}
                </span>
                <span className='hidden lg:visible lg:inline'>Hours</span>
                <span className='visible lg:hidden'>H</span>
            </div>
            <div>
                <span className='pr-2'>
                    {timeLeft[2] < 10 ? '0' + timeLeft[2] : timeLeft[2]}
                </span>
                <span className='hidden lg:visible lg:inline'>Minutes</span>
                <span className='visible lg:hidden'>M</span>
            </div>
            <div>
                <span className='pr-2'>
                    {timeLeft[3] < 10 ? '0' + timeLeft[3] : timeLeft[3]}
                </span>
                <span className='hidden lg:visible lg:inline'>Seconds</span>
                <span className='visible lg:hidden'>S</span>
            </div>
        </div>
    );
}

export default Timer;
