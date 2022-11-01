import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TeamsData from '../../src/components/admin/TeamsData';
import { supabase } from '../../utils/supabaseClient';

function Admin() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getSession().then(({ data, error }) => {
            if (error || data.session === null) {
                router.push('/5b9b0c176ed8adb0522bfddc3553296d/login');
            } else {
                supabase.auth
                    .getUser(data.session.access_token)
                    .then(({ data, error }) => {
                        if (error) {
                        } else {
                            setUser(data.user);
                        }
                    });
            }
        });
    }, []);

    useEffect(() => {
        if (user && user.email) {
        }
    }, [user]);

    const handleLogout = async () => {
        const { err } = await supabase.auth.signOut();

        if (err) {
            alert('Error logging out.');
        } else {
            router.push('/5b9b0c176ed8adb0522bfddc3553296d');
        }
    };

    return (
        <div className='max-w-7xl mx-auto'>
            Hello, {user?.email}
            <button className='btn' onClick={handleLogout}>
                Logout
            </button>
            <TeamsData />
        </div>
    );
}

export default Admin;
