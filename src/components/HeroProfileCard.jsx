import {FaPlay} from 'react-icons/fa'

const HeroProfileCard = () => {

    return (
        <div className='flex flex-col w-full md:w-[350px] lg:w-[400px] min-h-[150px] rounded-2xl bg-white overflow-hidden gap-y-6'>
            <div className='bg-black py-3 h-fit px-2 flex gap-1'>
                <div className='w-3 h-3 bg-red-600 rounded-full' />
                <div className='w-3 h-3 bg-yellow-400 rounded-full' />
                <div className='w-3 h-3 bg-green-600 rounded-full' />
            </div>
            <div className='relative w-full flex justify-center items-center mt-5 '>
                <img className='aspect-square rounded-full' src="/images/hero-women.png" alt="hero-women" />
                <div className='absolute right-10 lg:right-16 bottom-0'>
                    <ProfilePlayButton />
                </div>
            </div>

            <div className='text-center mb-3'>
                <h1 className='text-xl font-semibold uppercase'>Susmita</h1>
                <h3 className='font-semibold'>CEO & Founder</h3>
            </div>
        </div>
    );
};

const ProfilePlayButton = () => {
    return (
        <div className='bg-[#ccc] p-4 rounded-full border-[2px] border-white] cursor-pointer group'>
            <div className='bg-[#ff0000] p-2 rounded-full flex items-center justify-center group-hover:scale-110 transition'>
                <FaPlay color='#ccc' className='pl-1'/>
            </div>
        </div>
    )
}

export default HeroProfileCard;