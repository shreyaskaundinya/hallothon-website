import Image from 'next/image';
function Sponsor() {
    return (
        <div className='w-full flex flex-col justify-center items-center my-20 font-bold'>
            <h1 className='text-6xl md:text-step-7'>Sponsored By</h1>
            <Image
                src='/assets/cloudera.png'
                className='sponsor-logo'
                alt='Cloudera'
                width={736}
                height={182}></Image>
        </div>
    );
}

export default Sponsor;
