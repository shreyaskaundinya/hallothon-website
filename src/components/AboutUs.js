import Stripe1 from '../assets/stripe1.svg';
import Stripe2 from '../assets/stripe2.svg';
import Image from 'next/image';
function AboutUs(){
    return(
        <div className="about-us mt-20">
            <div className='stripes'>
                <Image src={Stripe1} alt='Stripe'/>
            </div>
            <div className='about-text'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident, sunt in culpa qui officia deserunt </p>
            </div>
            <div className='stripes'>
                <Image src={Stripe2} alt='Stripe'/>
            </div>
        </div>
    )
}
export default AboutUs;