function SpiderBorder() {
    return (
        <svg
            className='w-[calc(2*510px/3)] h-[calc(2*256px/3)] sm:w-[510px] sm:h-[256px]'
            viewBox='0 0 510 256'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <line
                x1='20.7764'
                y1='23.5528'
                x2='48.7764'
                y2='9.55279'
                stroke='#FF0003'
            />
            <line x1='49' y1='9.5' x2='464' y2='9.49996' stroke='#FF0003' />
            <line
                x1='32.8027'
                y1='73.2797'
                x2='56.4869'
                y2='49.5955'
                stroke='#FF0003'
            />
            <line
                x1='357.176'
                y1='203.692'
                x2='366.65'
                y2='182.376'
                stroke='#FF0003'
            />
            <line
                x1='380.86'
                y1='243.954'
                x2='390.333'
                y2='222.638'
                stroke='#FF0003'
            />
            <line
                x1='237.301'
                y1='182.376'
                x2='246.774'
                y2='203.691'
                stroke='#FF0003'
            />
            <line
                x1='255.457'
                y1='215.481'
                x2='264.931'
                y2='236.797'
                stroke='#FF0003'
            />
            <line
                x1='41.6609'
                y1='227.633'
                x2='54.6609'
                y2='215.633'
                stroke='#FF0003'
            />
            <line
                x1='9.5'
                y1='43.0005'
                x2='9.50001'
                y2='175.001'
                stroke='#FF0003'
            />
            <line
                x1='33.5'
                y1='71.0005'
                x2='33.5'
                y2='232.001'
                stroke='#FF0003'
            />
            <line
                x1='509.5'
                y1='83.0005'
                x2='509.5'
                y2='216.001'
                stroke='#FF0003'
            />
            <line
                x1='486.5'
                y1='100'
                x2='486.5'
                y2='175.001'
                stroke='#FF0003'
            />
            <line x1='9' y1='174.5' x2='57' y2='174.5' stroke='#FF0003' />
            <line x1='438' y1='174.5' x2='486' y2='174.5' stroke='#FF0003' />
            <line x1='246' y1='203.5' x2='358' y2='203.5' stroke='#FF0003' />
            <line x1='270' y1='243.5' x2='381' y2='243.5' stroke='#FF0003' />
            <line x1='398' y1='215.5' x2='509' y2='215.5' stroke='#FF0003' />
            <line x1='54' y1='215.5' x2='256' y2='215.5' stroke='#FF0003' />
            <ellipse
                cx='33'
                cy='231.5'
                rx='11.5'
                ry='12'
                transform='rotate(-90 33 231.5)'
                fill='#FF0004'
            />
            <circle
                cx='12'
                cy='31.0005'
                r='12'
                transform='rotate(-90 12 31.0005)'
                fill='#FF0004'
            />
            <ellipse
                cx='267.5'
                cy='244'
                rx='12'
                ry='11.5'
                transform='rotate(-90 267.5 244)'
                fill='#FF0004'
            />
            <ellipse
                cx='391'
                cy='213.5'
                rx='11.5'
                ry='12'
                transform='rotate(-90 391 213.5)'
                fill='#FF0004'
            />
            <ellipse
                cx='468'
                cy='9.5'
                rx='9.5'
                ry='10'
                transform='rotate(-90 468 9.5)'
                fill='#FF0004'
            />
            <line
                x1='474.537'
                y1='48.6469'
                x2='509.31'
                y2='83.4197'
                stroke='#AC1B1D'
            />
            <line
                x1='451.354'
                y1='64.8735'
                x2='486.126'
                y2='99.6462'
                stroke='#AC1B1D'
            />
        </svg>
    );
}

function InfoCard(props) {
    return (
        <div className='relative p-2 sm:scale-100'>
            <SpiderBorder />
            <div className='absolute top-0 left-0 right-0 bottom-4 grid place-items-center'>
                <div className='prizepoolbox w-2/3 sm:w-3/4 bg-[#181818]'>
                    <div className='text-step-1 sm:text-step-2 font-agency font-bold'>
                        {props.heading}
                    </div>
                    <div className='text-step-4 sm:text-step-5 font-agency'>
                        {props.body}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Prizepool() {
    return (
        <div className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-around py-40'>
            <InfoCard heading='Prize Pool' body='Rs.1,50,000 +' />
            <InfoCard heading='Date' body='14th October  2023' />
            <InfoCard heading='Venue' body='MRD Auditorium' />
        </div>
    );
}
