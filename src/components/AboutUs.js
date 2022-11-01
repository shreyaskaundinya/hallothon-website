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
                <p className='text-step-1 sm:text-step-2 font-poppins'>
                    Hallothon is an annual halloween themed hackathon that aims to bring
                    together students to create
                    innovative solutions to real-world problems. It is organized by 
                    the Department of Computer Science & Engineering. Last year, we received 900+ registrations with around 
                    300 participants. This year, we are back with the second edition of
                     Hallothon - <span className='text-red-600'>Hallothon'22</span>, sponsored by <span className='text-orange-600'>Cloudera</span>. 
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
