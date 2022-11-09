import TimelineCard from './TimelineCard';

const TimelineAlt = ({ timeline }) => {
    return (
        <div className='p-8 md:p-4'>
            <div className='grid'>
                {timeline.map((item, index) => (
                    <TimelineCard {...item} />
                ))}
            </div>
        </div>
    );
};

export default TimelineAlt;
