import Head from 'next/head';
import AboutUs from '../src/components/AboutUs';
import Faq from '../src/components/Faq';
import Footer from '../src/components/Footer';
import HeroUpdate from '../src/components/HeroUpdate';
import Navbar from '../src/components/Navbar';
import Prizepool from '../src/components/Prizepool';
import TimelineSection from '../src/components/Timeline';

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>Hallothon 2022</title>
                <meta name='description' content='👻 👻 👻 👻 👻' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <HeroUpdate />
            <Prizepool />
            {/* <Sponsor /> */}
            <AboutUs />
            <TimelineSection />
            <Faq />
            <Footer className='absolute b-0' />
        </div>
    );
}
