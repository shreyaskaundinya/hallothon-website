import Head from 'next/head';
import AboutUs from '../src/components/AboutUs';
import Faq from '../src/components/Faq';
import Footer from '../src/components/Footer';
import Game from '../src/components/game/Game';
import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import Prizepool from '../src/components/Prizepool';
import Sponsor from '../src/components/Sponsor';

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>Hallothon 2022</title>
                <meta name='description' content='👻 👻 👻 👻 👻' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <Hero />
            <Prizepool />
            <Sponsor />
            <AboutUs />
            <Faq />
            <Game />
            <Footer className='absolute b-0' />
        </div>
    );
}
