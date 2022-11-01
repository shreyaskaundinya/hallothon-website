import Navbar from '../../src/components/Navbar';
import Pumpkin from '../../src/components/Pumpkin';

function Success() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col h-screen justify-center'>
                <h1 className='text-5xl text-center pb-3'>Your Team is Registered Successfully!</h1>
                <h2 className='text-2xl text-center'>Our team will get back to you shortly</h2>
                {/* <Pumpkin /> */}
            </div>
        </div>
    );
}

export default Success;
