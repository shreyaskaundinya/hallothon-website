import { useCallback, useEffect, useMemo, useState } from 'react';
import MemberRegistration from './MemberRegistration';

function RegistrationForm() {
    const [teamDetails, setTeamDetails] = useState({
        team_name: '',
        problem: '',
        solution: '',
        domain: '',
    });

    const [membersDetails, setMemberDetails] = useState([]);

    const MAX_MEMBERS = useMemo(() => 4, []);

    const saveToLocalStorage = () => {
        console.log('SAVING TO LS', teamDetails);
        localStorage.setItem(
            'hallothon-saved-team-data',
            JSON.stringify(teamDetails)
        );
        localStorage.setItem(
            'hallothon-saved-member-data',
            JSON.stringify(membersDetails)
        );
    };

    useEffect(() => {
        const teamsData = localStorage.getItem('hallothon-saved-team-data');
        const membersData = localStorage.getItem('hallothon-saved-member-data');

        if (teamsData) {
            setTeamDetails(() => JSON.parse(teamsData));
        }
        if (membersData) {
            setMemberDetails(() => JSON.parse(membersData));
        }

        return () => {};
    }, []);

    const updateTeamDetails = useCallback(
        (e) => {
            console.log('UPDATING TEMA DEETS', e.target.value);
            setTeamDetails((prevDeets) => {
                return { ...prevDeets, [e.target.name]: e.target.value };
            });
        },
        [teamDetails]
    );

    const appendMember = useCallback(
        (e) => {
            e.preventDefault();
            setMemberDetails((prevMembers) => {
                if (prevMembers.length === MAX_MEMBERS) {
                    return prevMembers;
                }
                return [
                    ...prevMembers,
                    {
                        name: '',
                        email: '',
                        srn: '',
                        campus: '',
                        sem: '',
                        year: null,
                        branch: '',
                        phone: '',
                        gender: '',
                        guardian_name: '',
                        guardian_phone: '',
                        is_hostellite: false,
                        hostel_room_no: null,
                    },
                ];
            });
        },
        [membersDetails]
    );

    const updateMember = useCallback(
        (index, update) => {
            setMemberDetails((prevMembers) => {
                let x = [...prevMembers];
                x[index] = { ...x[index], ...update };
                return x;
            });
            // console.log(membersDetails[index]);
        },
        [membersDetails]
    );

    const removeMember = useCallback(
        (index) => {
            setMemberDetails((prevMembers) => {
                const x = [...prevMembers];
                x.splice(index, 1);
                return x;
            });
        },
        [membersDetails]
    );

    return (
        <div className='max-w-5xl mx-auto my-10 p-2'>
            <div className='flex justify-between items-center'>
                <h1 className='text-step-4 font-bold'>Registration Form</h1>
                <div className='flex flex-row gap-2'>
                    <button className='btn' onClick={saveToLocalStorage}>
                        Save Changes
                    </button>
                    <button className='btn' onClick={appendMember}>
                        Add Member +
                    </button>
                </div>
            </div>
            <form className=''>
                <label htmlFor='team_name'>
                    Team Name
                    <input
                        required
                        type='text'
                        name='team_name'
                        onChange={updateTeamDetails}
                        value={teamDetails.team_name}
                    />
                </label>

                <label htmlFor='problem'>
                    Problem
                    <textarea
                        required
                        type='text'
                        name='problem'
                        onChange={updateTeamDetails}
                        value={teamDetails.problem}
                    />
                </label>

                <label htmlFor='solution'>
                    Solution
                    <textarea
                        required
                        type='text'
                        name='solution'
                        onChange={updateTeamDetails}
                        value={teamDetails.solution}
                    />
                </label>

                <label htmlFor='domain'>
                    Domain
                    <input
                        required
                        type='text'
                        name='domain'
                        onChange={updateTeamDetails}
                        value={teamDetails.domain}
                    />
                </label>

                <div className='grid grid-cols-2 gap-2'>
                    {membersDetails.map((mem, idx) => {
                        return (
                            <MemberRegistration
                                key={idx}
                                member={mem}
                                updateMember={updateMember}
                                removeMember={removeMember}
                                index={idx}
                            />
                        );
                    })}
                </div>

                <button
                    className='btn my-2'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(teamDetails, membersDetails);
                    }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;
