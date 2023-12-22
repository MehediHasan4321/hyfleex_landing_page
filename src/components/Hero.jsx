import HeroProfileCard from "./HeroProfileCard";
import Navbar from "./Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Hero = () => {



    return (
        <section className="relative">
            <div id="home" className='w-full h-[896px] bg-[#FDF2FB] rounded-l-[50px]'>
                <div className="fixed w-full">
                    <Navbar />
                </div>
                <div className="w-full h-full bg-hero-bg bg-no-repeat" >

                    <div className=" container mx-auto w-full h-full flex items-center justify-between">
                        <div className="w-1/2 h-full flex items-center justify-center ">
                            <div className="flex flex-col gap-y-4">
                                <div className="flex flex-col gap-y-3">

                                    <Heading text={'Become Fluent in'} />
                                    <div className="px-3 py-3 flex rounded-lg w-fit" style={{ border: 'dashed 2px #524FD5' }}>
                                        <Heading text={'Foreign Language'} className={'text-primaryColor'} />
                                    </div>
                                    <Heading text={'with Hyfleex'} />
                                </div>
                                <div className="w-full md:w-5/6 lg:w-4/6">
                                    <p className="text-secondaryColor">
                                        Discover Spanish, German, English, IELTS, Japanese, and more languages with Hyfleex. Break barriers, build connections—start your multilingual journey!
                                    </p>
                                </div>
                                <div>
                                    <button className="outline-none border-none text-primaryColor text-lg font-medium flex items-center gap-x-1">
                                        Explore Courses
                                        <IoIosArrowRoundForward size={35} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <HeroProfileCard />
                        </div>
                    </div>

                </div>
            </div>
            <div className="-mt-10">
                <HomeReviews />
            </div>
        </section>
    );
};


const StudentRating = () => {

    return (
        <div className="bg-[#524fd5] flex flex-col items-center rounded-xl p-4 relative">
            <div className="absolute -top-5 bg-white rounded-full w-[48px] h-[48px] p-[2px] overflow-hidden">
                <img className=" rounded-full" src="/images/student.png" alt="student" />
            </div>
            <div className="mt-6 text-white">
                <p className="text-center text-md font-semibold">Rucha Kulkarni</p>
                <div className="flex items-center gap-x-2 mt-2">
                    <div className="bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full p-[2px]">
                        <img src="/images/google-icon.png" alt="icon" />
                    </div>
                    <div className="flex items-center gap-[1px] text-sm text-amber-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </div>
    )
}


const HomeReviews = () => {

    const studentsRating = [1, 2, 3]

    return (
        <div className=" container mx-auto bg-primaryColor rounded-xl flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-x-6  ml-16">


                <div className="bg-white rounded-xl border-2 border-primaryColor flex flex-col items-center px-6 py-3 justify-center -mt-14 ">
                    <p className="text-3xl font-semibold text-primaryColor">4.9</p>
                    <p className="text-md font-semibold mb-1">Rated on</p>
                    <img
                        className=" object-cover"
                        src="/images/google-text.png" alt="google" />
                </div>

                <div className="text-white">
                    <p>We helps 1500+ students to</p>
                    <p>Achieve their goals</p>
                </div>
            </div>
            <div className="flex items-center gap-x-4 -mt-16 mr-16">
                {
                    studentsRating.map(item => <StudentRating key={item} />)
                }
            </div>
        </div>
    )
}

const Heading = ({ text, className }) => {
    return (
        <h1 className={className ? `text-2xl md:text-4xl lg:text-6xl font-semibold ${className}` : 'text-2xl md:text-4xl lg:text-6xl font-semibold'}>
            {text}
        </h1>
    )
}

export default Hero;