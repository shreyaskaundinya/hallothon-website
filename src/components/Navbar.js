// import PESLogo from '/assets/pes.svg';
// import HallothonLogo from '/assets/hallothon_logo.svg';
// import Hamburger from '../assets/hamburger.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import gsap from 'gsap';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const paths = [
        { path: '/', name: 'Home' },
        { path: '/register', name: 'Register' },
        { path: '/#aboutus', name: 'About Us' },
        { path: '/#faq', name: 'FAQ' },
        { path: '/#contact', name: 'Contact' },
    ];

    return (
        <div className='z-[1000] sticky top-0'>
            <div className='navbar sm:flex'>
                <Image
                    src='/assets/pes.svg'
                    alt='PES'
                    width={109}
                    height={34}
                />
                <div className='links'>
                    {paths.map((p) => {
                        return p.path.charAt(0) === '/' ? (
                            <Link href={p.path}>{p.name}</Link>
                        ) : (
                            <a href={p.path}>{p.name}</a>
                        );
                    })}
                </div>
                <Image
                    src='/assets/hallothon_logo.svg'
                    alt='Hallothon'
                    height={(1.2 / 3) * 156}
                    width={(1.2 / 3) * 269}
                    className='hallothon-logo'
                />
            </div>
            <div className='navbar navbar-mobile sm:hidden relative items-center'>
                <div className='z-50'>
                    <Image
                        src='/assets/hamburger.svg'
                        alt='Menu'
                        height={32}
                        width={32}
                        onClick={toggleMenu}
                    />
                </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 grid place-items-center'>
                    <Image
                        src='/assets/hallothon_logo.svg'
                        alt='Hallothon'
                        height={(1.2 / 3) * 156}
                        width={(1.2 / 3) * 269}
                    />
                </div>
                <div>
                    <Image
                        src='/assets/pes.svg'
                        alt='PES'
                        width={109}
                        height={34}
                    />
                </div>
            </div>
            <div>
                {isOpen && (
                    <div className='links flex-col w-full text-center z-50 bg-black gap-4 py-4'>
                        {paths.map((p) => {
                            return p.path.charAt(0) === '/' ? (
                                <Link href={p.path}>{p.name}</Link>
                            ) : (
                                <a href={p.path}>{p.name}</a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
