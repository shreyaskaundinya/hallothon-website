import Image from 'next/image';
// import Stripe1 from '/assets/stripe1.svg';
function AboutUs() {
    return (
        <div className='about-us mt-40 mb-56 overflow-hidden'>
            <div className='stripes'>
                <Image
                    src='/assets/stripe1.svg'
                    alt='Stripe'
                    objectFit='cover'
                    layout='fill'
                />
            </div>
            <div className='max-w-7xl'>
                <h1 className='text-step-8'>ABOUT US</h1>
                <p className='text-step-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat proident, sunt in culpa qui officia deseruntDuis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat proident, sunt in culpa qui officia
                    deserunt
                </p>
            </div>
            <div className='stripes'>
                <Image
                    src='/assets/stripe2.svg'
                    alt='Stripe'
                    objectFit='cover'
                    layout='fill'
                />
            </div>
        </div>
    );
}
export default AboutUs;
