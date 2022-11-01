import Navbar from '../../src/components/Navbar';
import Head from 'next/head';
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
            <RegistrationForm />
        </div>
    );
}

export default Registration;
