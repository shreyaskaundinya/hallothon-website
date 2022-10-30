function MemberRegistration({ member, updateMember, removeMember, index }) {
    /*
    name: '',
    email: '',
    srn: '',
    campus: '',
    sem: '',
    year: '',
    branch: '',
    phone: '',
    gender: '',
    guardian_name: '',
    guardian_phone: '',
    is_hostellite: false,
    hostel_room_no: null,
    */
    const handleUpdate = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let val = e.target.value;

        if (name === 'is_hostellite') {
            val = val === 'true' ? true : false;
        }

        updateMember(index, { [name]: val });
    };

    const handleRemove = (e) => {
        e.preventDefault();
        removeMember(index);
    };

    return (
        <div className='border-2 border-white rounded-lg p-4 my-8 font-agency'>
            <p className='font-bold text-step-2 m-2 text-white'>
                Member {index + 1}
            </p>
            <hr />
            <div className='flex flex-col gap-4 text-white my-4'>
                <label htmlFor='name'>
                    Name
                    <input
                        required
                        type='text'
                        name='name'
                        onChange={handleUpdate}
                        value={member.name}
                    />
                </label>
                <label htmlFor='email'>
                    Email
                    <input
                        required
                        type='text'
                        name='email'
                        onChange={handleUpdate}
                        value={member.email}
                    />
                </label>
                <label htmlFor='srn'>
                    SRN
                    <input
                        required
                        type='text'
                        name='srn'
                        onChange={handleUpdate}
                        value={member.srn}
                    />
                </label>
                <div className='flex gap-2'>
                    <label htmlFor='is_hostellite' className='flex-1'>
                        Are you a hostellite?
                        <select
                            required
                            className=''
                            name='is_hostellite'
                            onChange={handleUpdate}
                            value={member.is_hostellite}>
                            <option value='true'>Yes</option>
                            <option value='false'>No</option>
                        </select>
                    </label>
                    {member.is_hostellite && (
                        <label htmlFor='hostel_room_no'>
                            Hostel Room No
                            <input
                                required
                                type='text'
                                name='hostel_room_no'
                                onChange={handleUpdate}
                                value={member.hostel_room_no}></input>
                        </label>
                    )}
                </div>
                <div className='flex gap-2'>
                    <label htmlFor='campus' className='flex-1'>
                        Campus
                        <select
                            required
                            className=''
                            name='campus'
                            onChange={handleUpdate}
                            // onClick={handleUpdate}
                            value={member.campus}>
                            <option value='EC'>EC Campus</option>
                            <option value='RR'>RR Campus</option>
                        </select>
                    </label>
                    <label htmlFor='sem' className='flex-1'>
                        SEM
                        <select
                            required
                            className=''
                            name='sem'
                            onChange={handleUpdate}
                            // onClick={handleUpdate}
                            value={member.sem}>
                            <option value='1'>1st Sem</option>
                            <option value='3'>3st Sem</option>
                            <option value='5'>5th Sem</option>
                            <option value='7'>7th Sem</option>
                        </select>
                    </label>
                    <label htmlFor='branch' className='flex-1'>
                        Branch
                        <select
                            required
                            className=''
                            name='branch'
                            onChange={handleUpdate}
                            // onClick={handleUpdate}
                            value={member.branch}>
                            <option value='CSE'>CSE</option>
                            <option value='ECE'>ECE</option>
                            <option value='EEE'>EEE</option>
                            <option value='MEC'>Mechanical</option>
                            <option value='CIV'>Civil</option>
                            <option value='BTE'>Bio Tech</option>
                            <option value='DES'>Design</option>
                        </select>
                    </label>
                </div>
                <div className='flex gap-2'>
                    <label htmlFor='phone' className='flex-1'>
                        Phone
                        <input
                            required
                            type='text'
                            name='phone'
                            onChange={handleUpdate}
                            value={member.phone}
                        />
                    </label>
                    <label htmlFor='gender'>
                        Gender
                        <select
                            required
                            className=''
                            name='gender'
                            onChange={handleUpdate}
                            // onClick={handleUpdate}
                            value={member.gender}>
                            <option value='M'>Male</option>
                            <option value='F'>Female</option>
                            <option value='NB'>Non Binary</option>
                            <option value='O'>Other</option>
                        </select>
                    </label>
                </div>
                <label htmlFor='github'>
                    Github Link
                    <input
                        type='text'
                        name='github'
                        onChange={handleUpdate}
                        value={member.github}
                    />
                </label>
                <label htmlFor='guardian_name'>
                    Guardian Name
                    <input
                        required
                        type='text'
                        name='guardian_name'
                        onChange={handleUpdate}
                        value={member.guardian_name}
                    />
                </label>
                <label htmlFor='guardian_phone'>
                    Guardian Phone
                    <input
                        required
                        type='text'
                        name='guardian_phone'
                        onChange={handleUpdate}
                        value={member.guardian_phone}
                    />
                </label>
            </div>
            <button className='btn w-full' onClick={handleRemove}>
                Remove Member
            </button>
        </div>
    );
}

export default MemberRegistration;
