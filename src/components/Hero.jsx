import Navbar from "./Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
const Hero = () => {
    return (
        <div className='w-full h-[896px] bg-[#FDF2FB] rounded-l-[50px]'>
             <div className="fixed w-full"> 
             <Navbar />
             </div>
            <div className="w-full h-full bg-hero-bg bg-no-repeat" >
               
                <div className=" container mx-auto flex items-center w-full h-full">
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-3">
                                <h1 className="text-6xl font-semibold text-[#181B32]">Become Fluent in</h1>
                                <div className="px-3 py-3 flex rounded-lg w-fit"   style={{ border: 'dashed 2px #524FD5' }}>
                                    <h1 className="text-6xl font-semibold text-primaryColor mb-3">Foreign Language</h1>
                                </div>
                                <h1 className="text-6xl font-semibold ">with Hyfleex</h1>
                            </div>
                            <div className="w-4/6">
                                <p className="text-secondaryColor">
                                    Discover Spanish, German, English, IELTS, Japanese, and more languages with Hyfleex. Break barriers, build connections—start your multilingual journey!
                                </p>
                            </div>
                            <div>
                                <button className="outline-none border-none text-primaryColor text-lg font-medium flex items-center gap-x-1">
                                    Explore Courses
                                    <IoIosArrowRoundForward size={35}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;