import { useCallback, useEffect, useMemo, useState } from 'react';
import MemberRegistration from './MemberRegistration';
import { supabase } from '../../utils/supabaseClient'

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

        return () => { };
    }, []);

    const updateTeamDetails = useCallback(
        (e) => {
            console.log('UPDATING TEAM DEETS', e.target.value);
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
                        campus: 'EC',
                        sem: '1',
                        year: 0,
                        branch: 'CSE',
                        phone: '',
                        gender: 'M',
                        github: '',
                        guardian_name: '',
                        guardian_phone: '',
                        is_hostellite: false,
                        hostel_room_no: 0,
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
    const validateData = useCallback((teamDetails, memberDetails) => {
        if (
            teamDetails.team_name === '' ||
            teamDetails.problem === '' ||
            teamDetails.solution === '' ||
            teamDetails.domain === ''
        ) {
            alert('Please fill all the fields in the team details section');
            return false;
        }

        if (memberDetails.length === 0) {
            alert('Please add atleast one member');
            return false;
        }

        for (let i = 0; i < memberDetails.length; i++) {
            const member = memberDetails[i];
            if (
                (member.name === '' ||
                    member.email === '' ||
                    member.srn === '' ||
                    member.phone === '' ||
                    member.guardian_name === '' ||
                    member.guardian_phone === '')
            ) {
                alert(
                    `Please fill all the fields in the member details section for member ${i + 1}`
                );
                return false;
            }
            if (!member.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                alert('Please enter a valid email address');
                return;
            }
            if (!member.phone.match(/^[0-9]{10}$/)) {
                alert('Please enter a valid phone number');
                return;
            }
            if (!member.guardian_phone.match(/^[0-9]{10}$/)) {
                alert('Please enter a valid guardian phone number');
                return
            }
            if (!member.srn.match(/^(pes|PES)[1-2](ug|UG)(19|2[0-2])..\d\d\d/)) {
                alert('Please enter a valid SRN');
                return
            }
        }
        registerTeam(teamDetails, memberDetails);
    })

    const registerTeam = useCallback(
        async (teamDetails, memberDetails) => {
            const { data, error } = await supabase.from('Team').insert([teamDetails])
            if (error) {

            }
            else {
                let team = await supabase.from('Team').select('id').eq('team_name', teamDetails.team_name)
                let teamId = team.data[0].id
                memberDetails.map(async (member) => {
                    console.log(member);
                    member.team_id = teamId
                    member.team_name = teamDetails.team_name
                    const { data1, error1 } = await supabase.from('Member').insert([member])
                    let currMember = await supabase.from('Member').select('id').eq('srn', member.srn)
                    let memberId = currMember.data[0].id
                    const { data2, error2 } = await supabase.from('MemberStatus').insert([{ member_id: memberId }])
                    if (error1 || error2) {
                        alert('Error in registering team')
                    }
                    else{
                        alert('Team registered successfully')
                    }
                })

            }

        }
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
            <form className='text-black'>
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
                        validateData(teamDetails, membersDetails);
                    }}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;
