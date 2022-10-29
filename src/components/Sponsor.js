import Image from 'next/image';
function Sponsor() {
    return (
        <div className='w-full flex flex-col justify-center items-center my-20 font-bold'>
            <h2 className='text-step-8'>Sponsored By</h2>
            <Image
                src='/assets/cloudera.png'
                className='sponsor-logo'
                alt='Cloudera'
                width={368}
                height={91}></Image>
        </div>
    );
}

export default Sponsor;
