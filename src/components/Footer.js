import Image from 'next/image';

function Footer() {
    return (
        <div
            className='w-full flex lg:flex-row justify-around p-10 flex-col items-start border-t-4 border-t-hallored'
            id='contact'>
            <div className='flex flex-col footer-col justify-start gap-2 '>
                <div>
                    <Image
                        src='/assets/footerLogo.svg'
                        alt='Logo'
                        width={221}
                        height={51}
                    />
                </div>
                {/* <h1>HALLOTHON</h1> */}
                <div className='flex justify-start'>
                    
                </div>
                <h3 className='text-xl'>PES UNIVERSITY</h3>
                <p className='text-lg font-agency'>
                    100 Feet Ring Road, BSK III Stage,Bangalore-560085
                </p>
                <h2 className='text-zinc-500 mt-2'>
                    Hallothon Design & Tech Team
                </h2>
            </div>
            <div className='flex flex-col  gap-2'>
                <h1 className='text-step-5 m-0'>CONTACT US</h1>
                <h5 className='text-step-1'>Charitha : +91 93534 62756</h5>
                <h5 className='text-step-1'>Abhignya  : +91 80973 07565</h5>
                <h5 className='text-step-1'>Ankush : +91 86182 10549</h5>
            </div>
        </div>
    );
}

export default Footer;
