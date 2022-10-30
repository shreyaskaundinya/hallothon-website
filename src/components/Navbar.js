// import PESLogo from '/assets/pes.svg';
// import HallothonLogo from '/assets/hallothon_logo.svg';
// import Hamburger from '../assets/hamburger.svg';
import Image from 'next/image';
import { useState } from 'react';
// import gsap from 'gsap';
function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev)=> !prev);
    }
    return (
        <>
        <div className="navbar sm:flex">
            <Image src='/assets/pes.svg' alt="PES" height={100} width={150}/>
            <div className="links">
                <a href="/create">Register</a>
                <a href="/">FYI</a>
                <a href="/">About Us</a>
                <a href="/">Contact </a>
            </div>
            <Image src='/assets/hallothon_logo.svg' alt="Hallothon" height={80} width={150}  className='hallothon-logo'/>
        </div>
        <div className='navbar navbar-mobile sm:hidden'>
            <Image src='/assets/hamburger.svg' alt="Menu" height={100}  width={150}onClick={toggleMenu}/>
            <Image src='/assets/hallothon_logo.svg' alt="Hallothon" height={80} width={150}/>
            <Image src='/assets/pes.svg' alt="PES" height={100} width={150}/>
        </div>
        <div>
            {isOpen && 
        <div className="links flex-col w-full text-center">
                <a href="/create">Register</a>
                <a href="/">FYI</a>
                <a href="/">About Us</a>
                <a href="/">Contact </a>
        </div>
}
        </div>
        </>
    );
}

export default Navbar;
