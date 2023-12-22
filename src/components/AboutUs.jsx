import React from 'react';

const AboutUs = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-row items-center justify-around px-6 gap-x-5'>
                <div className='flex flex-col gap-y-5 w-1/2'>
                    <h4 className='text-secondaryColor text-lg font-semibold'>About Us</h4>
                    <div className='space-y-3 mb-3'>
                        <h1 className='text-5xl font-semibold flex items-center gap-x-2 '>Promoting global connectivity <span><img src="/images/icon-h1.png" alt="" /></span> </h1>
                        <h1 className='text-5xl font-semibold'>through language and culture.</h1>
                    </div>
                    <p className='text-secondaryColor text-md'>The mission of Hyfleex is to provide students with the opportunity to learn about different languages and cultures. The classes aim to promote an understanding and appreciation of the languages and cultures among students. Additionally, the types seek to prepare students for future academic and professional opportunities in which they may encounter the language.</p>
                </div>
                <div>
                    <img src="/images/about-image.png" alt="image" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;