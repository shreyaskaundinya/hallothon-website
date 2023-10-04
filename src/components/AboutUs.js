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
                🎃 Hallothon 2.0 is Back! 🎃<br></br>

Are you ready for the spooktacular return of Hallothon? It's that time of year again when we summon the brightest minds for a thrilling adventure into the world of technology and innovation. Organized by the Department of Computer Science & Engineering, Hallothon is the annual Halloween-themed hackathon that brings students together to conjure innovative solutions to real-world problems.

Last year, we were spellbound by the overwhelming response, with 900+ registrations and around 300 participants. This year, we're brewing up something even more enchanting - Hallothon 2.0! It's bigger, it's better, and it's sure to send shivers down your coding spines.

Stay tuned for more updates, as we prepare to unleash the magic of Hallothon once again. Get your cauldrons ready, sharpen your broomsticks, and summon your fellow wizards and witches. Hallothon 2.0 is coming, and it's going to be a bewitching experience you won't want to miss! 

Join us for the most mystical hackathon of the year  💻🎉🌕{' '}
                    <span className='text-red-600'>Hallothon'23</span>,
                    sponsored by{' '}
                    <span className='text-orange-600'>Cloudera</span>.
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
