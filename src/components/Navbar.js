import PESLogo from '../assets/pes.svg';
import Logo from '../assets/hallothonLogo.svg';
import Image from 'next/image';
function Navbar(){
    return (
        <div className="navbar">
            <Image src={PESLogo} alt="PES" height={100}/>
            <div className="links">
                <a href="/create">Register</a>
                <a href="/">FYI</a>
                <a href="/">About Us</a>
                <a href="/">Contact </a>
            </div>
            <Image src={PESLogo} alt="Hallothon" height={100} className='hallothon-logo'/>
        </div>
    );
}

export default Navbar;