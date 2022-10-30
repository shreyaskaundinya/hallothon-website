import Image from 'next/image';
// import PESLogo from '../assets/pes.svg';
function Navbar() {
    return (
        <div className='navbar'>
            <Image src='/assets/pes.svg' alt='PES' height={100} width={150} />
            <div className='links'>
                <a href='/create'>Register</a>
                <a href='/'>FYI</a>
                <a href='/'>About Us</a>
                <a href='/'>Contact </a>
            </div>
            <Image
                src='/assets/hallothon_logo.svg'
                alt='Hallothon'
                height={100} width={150}
                className='hallothon-logo'
            />
        </div>
    );
}

export default Navbar;
