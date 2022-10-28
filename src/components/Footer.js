import Logo from '../assets/footerLogo.svg'
import Instagram from '../assets/instagram.svg'
import Image from 'next/image';
function Footer(){
    return (
        <div className=" w-full flex lg:flex-row justify-around p-10 flex-col">
            <div className='flex flex-col footer-col justify-start'>
                <Image src={Logo} alt="Logo"/>
                {/* <h1>HALLOTHON</h1> */}
                <div className='flex justify-start'>
                    <Image src={Instagram}/>
                    <Image src={Instagram}/>
                    <Image src={Instagram}/>
                    <Image src={Instagram}/>
                </div>
                <h3 className='text-xl'>PES UNIVERSITY</h3>
                <p className='text-l'>100 Feet Ring Road, BSK III Stage,Bangalore-560085</p>
                <h2 className='text-zinc-500 mt-2'>Hallothon Design & Tech Team</h2>
            </div>
            <div className='flex flex-col footer-contact align-center justify-center'>
                <h1 className='text-4xl mb-8'>Contact Us</h1>
                <h5>Shashank Varma : +91 9538655010</h5>
                <h5>Siddharth Kumar : +91 9538655010</h5>
                <h5>Shreyas S : +91 9538655010</h5>
            </div>
        </div>
    )
}

export default Footer;