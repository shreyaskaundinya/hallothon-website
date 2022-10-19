import Timer from "./Timer";
import Image from "next/image";
import RegisterButton from "./RegisterButton";
import Skull from '../assets/skull.svg';
function Hero(){
    return(
        <div className="w-full">
            <div className='skull'>
                <Image src={Skull}/>
            </div>
            <h2 className="w-full main-title text-left stroke-text leading-tight pl-20">HALLO</h2>
            <h2 className="w-full main-title text-right year leading-none tracking-widest">2022</h2>
            <h2 className="w-full main-title text-center leading-tight">- &nbsp;HALLO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;THON&nbsp; -</h2>
            <div className="flex items-center register-button-container">
                <RegisterButton/>
                <h2 className="w-full main-title text-right stroke-text leading-tight pr-20">THON</h2>
            </div>
            <Timer/>
        </div>
    )
}
export default Hero;