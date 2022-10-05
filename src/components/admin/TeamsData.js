import { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';
import TeamsSection from './TeamsSection';

function TeamsData() {
    const [teams, setTeams] = useState({});
    const [selected, setSelected] = useState({});
    const [waitlist, setWaitList] = useState({});

    const getRegistrations = async () => {
        // get all team details
        const { data, error } = await supabase.from('Team').select(`
            *,
            Member!inner(*)
        `);
        let teams_map = {};

        data.forEach((t) => {
            if (
                Object.hasOwn(selected, t.id) ||
                Object.hasOwn(waitlist, t.id)
            ) {
                return;
            }
            teams_map[t.id] = t;
        });

        setTeams(teams_map);
    };

    const addToWorkingList = (team_id) => {
        let team;
        if (Object.hasOwn(selected, team_id)) {
            // console.log('GENERAL LIST HAS', team_id);
            team = selected[team_id];
            delete selected[team_id];
        }
        if (Object.hasOwn(waitlist, team_id)) {
            // console.log('WAITLIST HAS', team_id);
            team = waitlist[team_id];
            delete waitlist[team_id];
        }
        // console.log(team);
        if (team) {
            // console.log('SENDING', team_id, 'TO SELECTED');
            setTeams((prev) => {
                return { ...prev, [team_id]: team };
            });
        }
    };

    const addToSelectedList = (team_id) => {
        let team;
        if (Object.hasOwn(teams, team_id)) {
            // console.log('GENERAL LIST HAS', team_id);
            team = teams[team_id];
            delete teams[team_id];
        }
        if (Object.hasOwn(waitlist, team_id)) {
            // console.log('WAITLIST HAS', team_id);
            team = waitlist[team_id];
            delete waitlist[team_id];
        }
        // console.log(team);
        if (team) {
            // console.log('SENDING', team_id, 'TO SELECTED');
            setSelected((prev) => {
                return { ...prev, [team_id]: team };
            });
        }
    };

    const addToWaitList = (team_id) => {
        let team;
        if (Object.hasOwn(teams, team_id)) {
            // console.log('GENERAL LIST HAS', team_id);
            team = teams[team_id];
            delete teams[team_id];
        }
        if (Object.hasOwn(selected, team_id)) {
            // console.log('SELECTED HAS', team_id);
            team = selected[team_id];
            delete selected[team_id];
        }
        // console.log(team);
        if (team) {
            // console.log('SENDING', team_id, 'TO WAITLIST');
            setWaitList((prev) => {
                return { ...prev, [team_id]: team };
            });
        }
    };

    return (
        <div className=''>
            <button className='btn' onClick={getRegistrations}>
                Get Data
            </button>
            <button
                className='btn'
                onClick={() => {
                    console.log('COMMITTING CHANGES TO DB');
                }}>
                Commit Changes
            </button>
            <div>
                <TeamsSection
                    teamsMap={teams}
                    sectionTitle='Working List'
                    addToSelectedList={addToSelectedList}
                    addToWaitList={addToWaitList}
                    addToWorkingList={addToWorkingList}
                    sectionTag='workinglist'
                />
                <TeamsSection
                    teamsMap={selected}
                    sectionTitle='Selected List'
                    addToSelectedList={addToSelectedList}
                    addToWaitList={addToWaitList}
                    addToWorkingList={addToWorkingList}
                    sectionTag='selected'
                />
                <TeamsSection
                    teamsMap={waitlist}
                    sectionTitle='Waitlist'
                    addToSelectedList={addToSelectedList}
                    addToWaitList={addToWaitList}
                    addToWorkingList={addToWorkingList}
                    sectionTag='waitlist'
                />
            </div>
        </div>
    );
}

export default TeamsData;
