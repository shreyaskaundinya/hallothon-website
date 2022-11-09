const TimelineCard = ({ time, title, desc, active = false }) => {
    const timeSplit = time.split(' ');
    return (
        <div className='grid grid-flow-col justify-start gap-4'>
            <p className='font-semibold w-[50px] lg:w-[75px] text-lg md:text-2xl'>
                {timeSplit[0]}
                <span className='pl-1 text-hallored'>{timeSplit[1]}</span>
            </p>
            <div className='relative border-l-2 border-dashed border-gray-200 border-opacity-60 pl-8 pb-4'>
                <span
                    className={`absolute -left-[calc(1rem-10px)] top-3 w-[10px] h-[10px] ${
                        active ? 'bg-hallored' : 'bg-gray-400'
                    } rounded-full`}></span>
                <span
                    className={`absolute -left-[calc(1rem-6px)] top-[calc(0.5rem)] w-[18px] h-[18px] border ${
                        active ? 'border-hallored' : 'border-gray-400'
                    } rounded-full`}></span>
                <div className='max-w-sm text-step-1'>
                    <p className='font-bold'>{title}</p>
                    <p className='ItineraryBody_anim'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;
