import PESLogo from '../assets/pes.svg';
import HallothonLogo from '../assets/hallothon_logo.svg';
import Hamburger from '../assets/hamburger.svg';
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
            <Image src={PESLogo} alt="PES" height={100}/>
            <div className="links">
                <a href="/create">Register</a>
                <a href="/">FYI</a>
                <a href="/">About Us</a>
                <a href="/">Contact </a>
            </div>
            <Image src={HallothonLogo} alt="Hallothon" height={80}  className='hallothon-logo'/>
        </div>
        <div className='navbar navbar-mobile sm:hidden'>
            <Image src={Hamburger} alt="Menu" height={100} onClick={toggleMenu}/>
            <Image src={HallothonLogo} alt="Hallothon" height={80}/>
            <Image src={PESLogo} alt="PES" height={100}/>
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
