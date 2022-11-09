import Head from 'next/head';
import Navbar from '../../src/components/Navbar';
import RegistrationForm from '../../src/components/RegistrationForm';

function Registration() {
    return (
        <div>
            <Head>
                <title>Hallothon Registration</title>
                <meta name='description' content='👻 👻 👻 👻 👻' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            {/* <div className='text-5xl text-center py-16'>Registrations Opening at 11:59 PM Today</div> */}
            <div className='font-poppins'>
                <RegistrationForm />
            </div>
        </div>
    );
}

export default Registration;
