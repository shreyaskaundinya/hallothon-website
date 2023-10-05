import Image from 'next/image';
function AboutUs() {
    return (
        <div className='about-us mt-40 mb-56 overflow-hidden' id='aboutus'>
            <div className='stripes'>
                <Image
                    src='/assets/stripe1.svg'
                    alt='Stripe'
                    objectFit='cover'
                    layout='fill'
                />
            </div>
            <div className='max-w-7xl'>
                <h1 className='text-6xl md:text-step-8 my-4 font-bold text-center'>
                    About Us
                </h1>
                <p className='text-step-1 sm:text-step-2 '>
                <span className='text-center block'>🎃 Dare to Code the Unheard: <span className="text-red-600 font-semibold">Hallothon 2023</span> - A Hackathon Like No Other 🎃</span>
                
Prepare for an enchanting experience like no other as we unveil <span className="text-red-600 font-semibold">Hallothon 3.0</span>, conjured by the creative minds of the Department of Computer Science and Engineering. This spellbinding event masterfully blends the mystical essence of Halloween with the quest for innovative solutions to real-world challenges.

After last year's astounding success, where over 1000 registrations and nearly 200 spirited participants lit up the night, we've brewed up something even more captivating for this year - <span className="text-red-600 font-semibold">Hallothon 3.0</span>. Brace yourselves for a grander, more enchanting, and spine-tingling adventure that will send shivers down even the most seasoned coder's spine.

As the moon rises and anticipation bubbles in our cauldrons, we invite you to stay tuned for a bewitching series of updates. <span className="text-red-600 font-semibold">Hallothon 3.0</span> looms on the horizon, promising an unforgettable experience—a fusion of mystical talents, innovation, and the irresistible allure of Halloween. We've conjured up a trove of enticing cash prizes and enigmatic rewards that will leave you spellbound.
Join us for the most magical hackathon of the year, <span className="text-red-600 font-semibold">Hallothon'23</span>, where innovation and the supernatural blend seamlessly, and technology dances with the eerie in a captivating symphony.<br></br>
                    <span className='text-red-600 font-semibold'>Hallothon'23</span>,
                    {/* sponsored by{' '}
                    <span className='text-orange-600 font-semibold'>Cloudera</span>. */}
                </p>
            </div>
            <div className='stripes'>
                <Image
                    src='/assets/stripe1.svg'
                    alt='Stripe'
                    objectFit='cover'
                    layout='fill'
                />
            </div>
        </div>
    );
}
export default AboutUs;
