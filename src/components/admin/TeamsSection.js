import { useState } from 'react';
import TeamCard from './TeamCard';

function TeamsSection({
    teamsMap,
    sectionTitle,
    sectionTag,
    addToSelectedList,
    addToWaitList,
    addToWorkingList,
}) {
    const [open, setOpen] = useState(true);
    return (
        <section className='my-5'>
            <div className='p-2 border-b-2 border-black my-10 flex justify-between items-center'>
                <h1 className='text-step-3 font-bold'>{sectionTitle}</h1>
                <div className='flex gap-2 items-center'>
                    <p>{Object.keys(teamsMap).length} Teams</p>
                    <button
                        className='btn'
                        onClick={() => setOpen((prev) => !prev)}>
                        {open ? 'close' : 'open'}
                    </button>
                </div>
            </div>
            <div
                className={`flex gap-4 flex-wrap ${
                    open ? 'visible' : 'hidden'
                } transition-all duration-150 ease-in-out`}>
                {Object.values(teamsMap)?.map((team) => {
                    return (
                        <TeamCard
                            key={team.team_uuid}
                            team={team}
                            addToSelectedList={addToSelectedList}
                            addToWaitList={addToWaitList}
                            addToWorkingList={addToWorkingList}
                            tag={sectionTag}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default TeamsSection;
