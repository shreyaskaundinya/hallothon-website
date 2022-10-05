import { useRouter } from 'next/router';
import { useRef } from 'react';
import { supabase } from '../../utils/supabaseClient';

function AdminRegister() {
    const formRef = useRef(null);
    const router = useRouter();

    const registerAdmin = async (user) => {
        supabase.auth
            .signUp(user)
            .then((res) => {
                supabase
                    .from('UserDetails')
                    .insert([{ user_id: res.data.user.id, is_admin: true }])
                    .then((data) => {
                        alert('User Added!');
                        router.push('/admin');
                    })
                    .catch((err) => {});
            })
            .catch((err) => {
                alert('Error signing up. Try Again');
            });

        try {
            formRef.current.clear();
        } catch {}
    };

    const validateData = (user) => {
        if (
            user.email === '' ||
            user.password === '' ||
            user.confirm_password === ''
        ) {
            alert('Please Fill All Fields!');
            return false;
        }
        if (user.password != user.confirm_password) {
            alert('Passwords dont match!');
            return false;
        }
        if (
            !user.email.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
        ) {
            alert('Please enter a valid email address');
            return false;
        }
        return true;
    };

    const handleRegisterUser = (e) => {
        e.preventDefault();
        const val = Object.fromEntries(new FormData(formRef.current).entries());

        if (validateData(val)) {
            delete val.confirm_password;
            registerAdmin(val);
        }
    };

    return (
        <div className='grid place-items-center w-full h-screen'>
            <form
                method='POST'
                className='border p-6 rounded-lg flex flex-col gap-2 md:w-1/2 lg:w-1/3 justify-center'
                onSubmit={handleRegisterUser}
                ref={formRef}>
                <p className='font-bold text-step-2 self-center'>
                    Register Admin
                </p>
                <label htmlFor='email'>
                    Email
                    <input required type='text' name='email' />
                </label>
                <label htmlFor='password'>
                    Password
                    <input required type='password' name='password' />
                </label>
                <label htmlFor='confirm_password'>
                    Confirm Password
                    <input required type='password' name='confirm_password' />
                </label>
                <button className='btn w-1/3 mt-4 self-center'>Register</button>
            </form>
        </div>
    );
}

export default AdminRegister;
