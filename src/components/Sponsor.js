import Cloudera from '../assets/cloudera.png'; 
import Image from 'next/image';
function Sponsor(){
    return(
        <div className='w-full flex flex-col justify-center items-center my-20 font-bold'>
            <h2 className='heading'>Sponsored By</h2>
            <Image src={Cloudera} className='sponsor-logo'></Image>
        </div>
    )
}

export default Sponsor;