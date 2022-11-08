import { day1_timeline, day2_timeline } from '../../utils/timeline';
import TimelineGroup from './TimelineGroup';

function TimelineSection() {
    return (
        <div>
            <h1 className='text-6xl md:text-step-8 my-4 font-bold text-center'>
                Itinerary
            </h1>
            <div className='bg-black text-white min-h-screen'>
                <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto'>
                    <div>
                        <h1 className='text-center text-step-6 underline__green'>
                            11th November
                        </h1>

                        <TimelineGroup timeline={day1_timeline} />
                    </div>

                    <div>
                        <h1 className='text-center text-step-6 underline__green'>
                            12th November
                        </h1>

                        <TimelineGroup timeline={day2_timeline} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimelineSection;
