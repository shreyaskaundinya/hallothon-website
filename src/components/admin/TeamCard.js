function TeamCard({
    team,
    tag,
    addToSelectedList,
    addToWaitList,
    addToWorkingList,
}) {
    return (
        <div
            className={`border-2 rounded-lg shadow-lg p-4 max-w-md ${
                tag === 'selected'
                    ? 'border-green-400'
                    : tag === 'waitlist'
                    ? 'border-orange-400'
                    : 'border-gray-500'
            }`}>
            <p>
                <b>Team Id :</b> {team.id}
            </p>
            <p>
                <b>Team Name :</b> {team.team_name}
            </p>
            <p>
                <b>Problem :</b> {team.problem}
            </p>
            <p>
                <b>Solution :</b> {team.solution}
            </p>
            <p>
                <b>Members : </b>
            </p>
            {team?.Member?.map((mem) => {
                return <p key={mem.id}>{mem.name}</p>;
            })}
            <button className='btn' onClick={() => addToSelectedList(team.id)}>
                Select
            </button>
            <button className='btn' onClick={() => addToWaitList(team.id)}>
                Waitlist
            </button>
            <button className='btn' onClick={() => addToWorkingList(team.id)}>
                Working List
            </button>
        </div>
    );
}
export default TeamCard;
