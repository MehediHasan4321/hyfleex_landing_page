import React from 'react';

const Course = () => {
    const language = [
        {
            lang: 'Spanish',
            flag: '/images/spanish.png'
        },
        {
            lang: 'English & IELTS',
            flag: '/images/english.png'
        },
        {
            lang: 'German',
            flag: '/images/german.png'
        },
        {
            lang: 'Japanese',
            flag: '/images/japan.png'
        },
        {
            lang: 'French',
            flag: '/images/french.png'
        },
        {
            lang: 'Sanskrit',
            flag: '/images/french.png'
        }
    ]

    const tableContent = [
        {
            id: '1',
            image: '/images/a1.png',
            label: 'A1 - A2',
            desc: "Master Spanish step by step, from A1 to A2. Elevate your language skills with our tailored, level-wise approach.",
            uses: 70

        },
        {
            id: '2',
            image: '/images/b1.png',
            label: 'B1 - B2',
            desc: 'Elevate your Spanish from B1 to B2 with precision and depth.Fluent communication awaits!',
            uses: 40
        },
        {
            id: '3',
            image: '/images/c1.png',
            label: 'C1 - C2',
            desc: 'Attain language excellence from C1 to C2. Dive deep into advanced Spanish for superior fluency and cultural mastery',
            uses: 30
        }
    ]
    return (
        <div id='course' className='container mx-auto my-16'>
            <div className='flex items-center gap-x-8'>
                <div>
                    <img src="/images/course.png" alt="" />
                </div>
                <div>
                    <div>
                        <h3 className='text-secondaryColor font-semibold'>Our Courses</h3>
                        <div className='space-y-1'>
                            <h1 className='text-3xl font-semibold'>Explore Our Course</h1>
                            <h1 className='text-3xl font-semibold'>Your Multilingual Journey Begins Here!</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 my-5'>
                        {
                            language.map(item => <LangComp key={item.lang} {...item} />)
                        }
                    </div>


                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 border border-1">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Label
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        About
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Licence Use
                                    </th>

                                </tr>
                            </thead>
                            <tbody >
                                {
                                    tableContent.map(item => <tr 
                                    key={item.id}
                                    class="bg-white border border-1 ">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className='flex flex-row gap-1 items-center'>
                                                <div className='w-[48px] h-[48px]'>
                                                    <img src={item.image} alt="icon" />
                                                </div>
                                                <div>
                                                    <p className='text-md font-semibold'>{item.label}</p>
                                                    <p className='text-gray-400'>Check Syllabus</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td class="px-6 py-4 max-w-md">
                                            {item.desc}
                                        </td>
                                        <td class="px-6 py-4 ">
                                            <div className='flex flex-row gap-2 items-center'>
                                                <div className='relative bg-gray-200 rounded-full min-w-[100px] w-full h-2'>
                                                    <div className={`absolute h-full rounded-full bg-primaryColor`} style={{width:`${item.uses}%`}} />
                                                </div>
                                                <p>{item.uses}%</p>
                                            </div>
                                            
                                        </td>

                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

const LangComp = ({ flag, lang }) => {
    return (
        <div className='bg-white border border-primaryColor px-2 py-1 rounded-lg flex gap-x-2 items-center transition hover:drop-shadow-lg cursor-pointer'>
            <img src={flag} alt="fl" />
            <p className='text-sm font-semibold'>{lang}</p>
        </div>
    )
}

export default Course;