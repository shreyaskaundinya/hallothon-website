import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { supabase } from '../../utils/supabaseClient';
import MemberRegistration from './MemberRegistration';

let MAX_MEMBERS = 4;

function RegistrationForm() {
    const router = useRouter();
    const [teamDetails, setTeamDetails] = useState({
        team_name: '',
        problem: '',
        solution: '',
        domain: '',
    });

    const [membersDetails, setMemberDetails] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submitButton = useRef(null);

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
        if (isSubmitting) {
            saveToLocalStorage();
            submitButton.current.style.backgroundColor = 'black';
            submitButton.current.style.pointerEvents = 'none';
        } else {
            submitButton.current.style.backgroundColor = '#3f3f46';
            submitButton.current.style.pointerEvents = 'all';
        }
        if (teamsData) {
            setTeamDetails(() => JSON.parse(teamsData));
        }
        if (membersData) {
            setMemberDetails(() => JSON.parse(membersData));
        }

        return () => {};
    }, [isSubmitting]);

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
    const validateData = useCallback(async (teamDetails, memberDetails) => {
        setIsSubmitting(true);
        const { data, error } = await supabase.from('Team').select('team_name');
        if (error) {
            toast('Server Error', { type: 'error' });
            setIsSubmitting(false);
        } else {
            let teamNames = data.map((x) => x.team_name);
            if (teamNames.includes(teamDetails.team_name)) {
                toast('Team name already exists', { type: 'error' });
                setIsSubmitting(false);
                return false;
            }
            if (
                teamDetails.team_name === '' ||
                teamDetails.solution === '' ||
                teamDetails.domain === ''
            ) {
                toast(
                    'Please fill all the fields in the team details section',
                    { type: 'error', position: 'top-right' }
                );
                setIsSubmitting(false);
                return false;
            }

            if (memberDetails.length < 3 || memberDetails.length > 4) {
                toast('Team should have atleast 3 and atmost 4 members', {
                    type: 'error',
                    position: 'top-right',
                });
                setIsSubmitting(false);
                return false;
            }

            for (let i = 0; i < memberDetails.length; i++) {
                const member = memberDetails[i];
                if (
                    member.name === '' ||
                    member.email === '' ||
                    member.srn === '' ||
                    member.phone === '' ||
                    member.guardian_name === '' ||
                    member.guardian_phone === ''
                ) {
                    toast(
                        `Please fill all the fields in the member details section for member ${
                            i + 1
                        }`,
                        { type: 'error', position: 'top-right' }
                    );
                    setIsSubmitting(false);
                    return false;
                }
                if (
                    !member.email.match(
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    )
                ) {
                    toast('Please enter a valid email address', {
                        type: 'error',
                        position: 'top-right',
                    });
                    setIsSubmitting(false);
                    return;
                }
                if (!member.phone.match(/^[0-9]{10}$/)) {
                    toast('Please enter a valid phone number', {
                        type: 'error',
                        position: 'top-right',
                    });
                    setIsSubmitting(false);
                    return;
                }
                if (!member.guardian_phone.match(/^[0-9]{10}$/)) {
                    toast('Please enter a valid guardian phone number', {
                        type: 'error',
                        position: 'top-right',
                    });
                    setIsSubmitting(false);
                    return;
                }
                if (
                    !member.srn.match(
                        /^(pes|PES)[1-2](ug|UG)(19|2[0-2])..\d\d\d/
                    )
                ) {
                    toast('Please enter a valid SRN', {
                        type: 'error',
                        position: 'top-right',
                    });
                    setIsSubmitting(false);
                    return;
                }
            }
            registerTeam(teamDetails, memberDetails);
        }
    });

    const registerTeam = useCallback(async (teamDetails, memberDetails) => {
        const { data, error } = await supabase
            .from('Team')
            .insert([teamDetails]);
        if (error) {
            toast('Server Error! Please try again later', {
                type: 'error',
                position: 'top-right',
            });
            setIsSubmitting(false);
        } else {
            let team = await supabase
                .from('Team')
                .select('id')
                .eq('team_name', teamDetails.team_name);
            let teamId = team.data[0].id;
            memberDetails.map(async (member) => {
                console.log(member);
                member.team_id = teamId;
                member.team_name = teamDetails.team_name;
                const { data1, error1 } = await supabase
                    .from('Member')
                    .insert([member]);
                let currMember = await supabase
                    .from('Member')
                    .select('id')
                    .eq('srn', member.srn);
                let memberId = currMember.data[0].id;
                const { data2, error2 } = await supabase
                    .from('MemberStatus')
                    .insert([{ member_id: memberId }]);
                setIsSubmitting(false);
                if (error1 || error2) {
                    toast('Error in registering team', {
                        type: 'error',
                        position: 'top-right',
                    });
                    setIsSubmitting(false);
                } else {
                    toast('Team Registered Successfully', {
                        type: 'success',
                        position: 'bottom-right',
                        toastId: 'success',
                    });
                    setIsSubmitting(false);
                    router.push('/success');
                }
            });
        }
    });
    return (
        <div className='registration__form max-w-5xl mx-auto my-20 p-4 md:p-2 font-agency'>
            <div className='flex justify-between items-center border-b-2 border-white mb-16'>
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
            <div className='border-2 rounded-lg pb-4 '>
                <div className='text-step-3 font-bold  text-center text-red-600'>How to Register ?</div>
                <div className='px-10 py-3 text-step-1'>
                    <p>- To Register Fill out details of all the team members.</p>
                    <p>- A team can consist of 3-4 members.</p>
                    <p>- Click on Save Changes to save the form as a draft.</p>
                    <p>- After filling out the form recheck all the details as you won't be able to edit it later. After you are done, click on the Submit button, and that's it , your team is registered for Hallothon 2022!</p>
                    <p className='underline italic '>- We will be selecting teams on the basis of the solution given by you ,for the problem statements given below. A  totally diffrent problem statement might be given to the selected teams by us, prior to the event. </p>

                </div>
            </div>
            <form className='flex flex-col gap-4 pt-5'>
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
                {/* <label htmlFor='problem'>
                    Problem
                    <textarea
                        required
                        type='text'
                        name='problem'
                        onChange={updateTeamDetails}
                        value={teamDetails.problem}
                    />
                </label> */}

                <label htmlFor='solution'>
                    <span className='text-red-600'>Problem Statements , Choose any one:</span>
                    <span><span className='text-red-600 font-bold'>1.</span> With the introduction of concept of smart cities and smart health care and applications of IoT in various sectors, huge mounts of data will be generated. Long term success of these projects will depend on the underlying data analytics capability. Data transmitted by sensors needs to be continuously processed in real time , creating triggers or alarms in immediate terms and also deriving intelligent insights in the long term. Explain in detail how would you tackle the collection and handling of such huge amount of data in real time taking the example of any iot device of your choice. Also describe the approaches to learn from the data collected by listing out the various analytics techniques used to learn the data and possibly build a model to handle the real time inflow and learning of the data.</span>
                    <br></br>
                    <span><span className='text-red-600 font-bold'>2.</span> Most of the established software companies have large code-bases with millions of lines of code. The employees, are expected to use these pre-existing modules to implement further modules.With the current system, the employees are navigating these codebases to find the necessary modules. This is very inefficient and time consuming. Consider the concept of auto-completion used for the approach above. Using this concept as an inspiration, try to think of a methodology that can efficiently automate the navigation process in such a way that it can be made available to all other members of your team. Explain your approach in detail.</span>
                    <br></br>
                    <span><span className='text-red-600 font-bold'>3.</span> How would you architect a real-time, collaborative virtual whiteboard? Go into as much detail as possible - Algorithms, Tech stack, Concepts</span>
                    <br></br>
                    <span><span className='text-red-600 font-bold'>4.</span> There is a group of hospital chains that have come together to collaborate on research in the field of medicine. Suggest ideas to efficiently tackle geographically distributed huge amount of multi format data</span>
                    <br></br>
                    <span><span className='text-red-600 font-bold'>5.</span> Come up with a problem statement and explain your solution in detail for the same</span>
                    <br></br>
                    Explain your solution for <u>one of the above</u> problem statement in detail. Please mention the problem statement number.
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

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
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
                    disabled={isSubmitting}
                    ref={submitButton}
                    className='btn my-2'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(teamDetails, membersDetails);
                        validateData(teamDetails, membersDetails);
                    }}>
                    {isSubmitting ? 'Please Wait...' : 'Submit'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}
export default RegistrationForm;
