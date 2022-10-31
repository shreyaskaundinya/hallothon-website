import Navbar from '../../src/components/Navbar';
import Pumpkin from '../../src/components/Pumpkin';

function Success() {
    return (
        <div>
            <Navbar />
            <h1 className='text-5xl text-center'>Your Team is Registered Successfully!</h1>
            <h2 className='text-2xl text-center'>Our team will get back to you shortly</h2>
            <Pumpkin/>
        </div>
    );
}

export default Success;
