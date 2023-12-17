import React from 'react';

const Navbar = () => {
    const menuItem = ["Course","About Us","Teachers","Careers","Contact"]

    return (
        <div className='container mx-auto h-[75px] flex justify-between items-center'>
            <h1 className='text-blue-900 text-3xl font-semibold '>HYFLEEX</h1>
            <div className='flex items-center gap-x-8'>
                {
                    menuItem.map(item=><h3 key={item} className='font-medium text-[#666680] cursor-pointer transition hover:text-[#212121]
                    '>{item}</h3>)
                }
            </div>
            {/* update button style and change border color */}
            <button className='bg-white rounded-xl px-4 py-2 font-medium drop-shadow-xl hover:scale-110 transition'>
                Enroll Now
            </button>
        </div>
    );
};

export default Navbar;