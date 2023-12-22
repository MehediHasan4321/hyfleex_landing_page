import React from 'react';

const Value = () => {
    const values = [
        {
            title: 'Proven Success',
            desc: 'Join us for a track record of student success, proving our commitment to helping you achieve your language goals.',
            image: '/images/Play.png'
        },
        {
            title: 'Innovative Teaching',
            desc: 'Experience a modern approach to learning with a mix of traditional methods and cutting-edge techniques for an engaging language journey.',
            image: '/images/Send.png'
        },
        {
            title: 'Community Support',
            desc: 'Join a supportive language-learning community, emphasizing collaboration, cultural exchange, and constant motivation for language proficiency.',
            image: '/images/Paper.png'
        }
    ]
    return (
        <div id='value' className='container mx-auto my-20'>
            <div className='flex flex-col gap-y-6'>
                <div className='text-center space-y-3'>
                    <h2 className='text-lg font-semibold text-secondaryColor'>Why Chooses Us</h2>
                    <h1 className='text-3xl font-semibold'>Our Value</h1>
                </div>
                <div className=' flex flex-col md:flex-row items-center justify-around mt-8 px-8 gap-x-4'>
                    {
                        values.map(item => <ValueCart key={item.title} {...item} />)
                    }
                </div>
            </div>
        </div>
    );
};



const ValueCart = ({ image, desc, title }) => {
    return (
        <div className='flex flex-col items-center gap-y-3 p-2 max-w-[320px]'>
            <div className='w-[60px] h-[60px] relative mb-2'>
                <img src={image} alt="image" />
            </div>
            <div className='text-center space-y-3'>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <p className='text-sm text-secondaryColor'>{desc}</p>
            </div>
        </div>
    )
}

export default Value;