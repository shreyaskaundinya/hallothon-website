import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { supabase } from '../../utils/supabaseClient';

function AdminLogin() {
    const formRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        supabase.auth
            .getUser()
            .then(({ data, error }) => {
                if (error) {
                    console.log(error);
                } else {
                    router.push('/5b9b0c176ed8adb0522bfddc3553296d');
                }
            })
            .catch(() => {});
    }, []);

    const registerAdmin = async (user) => {
        const { userData, session, errorSignIn } =
            await supabase.auth.signInWithPassword(user);
        if (!errorSignIn) {
            console.log(userData, session);
        }

        if (errorSignIn) {
            alert('Error signing in. Try Again');
        } else {
            if (!true) {
                alert('User signedin is not an admin');
            } else {
                router.push('/5b9b0c176ed8adb0522bfddc3553296d');
            }
        }
        try {
            formRef.current.clear();
        } catch {}
    };

    const validateData = (user) => {
        if (user.email === '' || user.password === '') {
            alert('Please fill all fields!');
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
                <p className='font-bold text-step-2 self-center'>Admin Login</p>
                <label htmlFor='email'>
                    Email
                    <input required type='text' name='email' />
                </label>
                <label htmlFor='password'>
                    Password
                    <input required type='password' name='password' />
                </label>
                <button className='btn w-1/3 mt-4 self-center'>Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;
