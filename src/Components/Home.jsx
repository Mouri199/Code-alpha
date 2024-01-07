import { GoArrowRight } from "react-icons/go";
import banner1 from '/hero-banner-1.jpg'
import banner2 from '/hero-banner-2.jpg'
import shape from '/hero-shape-2.png'

import InternCards from "./InternCards";
import AboutUs from "./AboutUs";
import InternShip from "./InternShip";
import ContactForm from "./ContactForm";

const Home = () => {
    return (
        <div>
            <div className="lg:flex items-center mx-6 lg:mx-44 justify-around lg:mt-24">
                <div>
                    <h1 className="lg:text-7xl text-[42px] mb-3 font-semibold">Practice <br className="lg:block hidden" /> your <span className="text-[#EE4962]">skills</span></h1>

                    <p className="text-lg  lg:text-start text-center mb-5 pt-5">Lay the foundation for your future <br className="lg:hidden" /> prospects and dreams <br className="lg:block hidden" /> with the skills for excellence with CodeAlpha.</p>
                    <a href="https://forms.gle/s9TW7Tqi3tAQLCu78">
                        <button className='bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-xl font-bold rounded-full lg:mb-0 mb-5 text-white flex items-center uppercase gap-3'>Find Courses <GoArrowRight /></button>
                    </a>
                </div>
                <div className="absolute lg:block hidden lg:w-[400px] lg:ml-[600px] lg:mb-[270px] ">
                    <img src={shape} alt="" />
                </div>
                <div className="relative flex gap-10">
                    <div>
                        <img className="rounded-tr-[100px] rounded-bl-[100px]" src={banner1} alt="" />
                    </div>
                    <div>
                        <img className="rounded-tl-[60px] lg:mt-40 rounded-br-[60px]" src={banner2} alt="" />
                    </div>
                </div>

            </div>
            <p className=" text-[#EE4962] uppercase lg:hidden text-center mt-3">Categories</p>

            <InternCards></InternCards>

            <AboutUs></AboutUs>

            <InternShip></InternShip>

            <ContactForm />
        </div>
    );
};

export default Home;