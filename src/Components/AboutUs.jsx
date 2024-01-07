import aboutBanner from '/about-banner.jpg'
import shape from '/about-shape-3.png'
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const AboutUs = () => {
    return (
        <div>
            <p className='text-center uppercase mb-10'>About Us</p>
            <div className='lg:flex mt-20 mb-28 items-center justify-around mx-5 lg:mx-44'>
                <div>
                    <div className='absolute lg:block hidden  lg:-ml-[100px] lg:-mt-[70px]'>
                        <img src={shape} alt="" />
                    </div>
                    <div className='relative'>
                        <img className='rounded-xl transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1' src={aboutBanner} alt="" />
                    </div>
                    <div className='lg:block hidden absolute w-[380px] lg:ml-[280px] lg:-mt-[470px]'>
                        <img src={shape} alt="" />
                    </div>

                </div>
                <div>
                    <h1 className='lg:text-[45px] lg:text-start text-center text-2xl font-semibold mb-4'>WHY CHOOSE <span className='text-[#EE4962]'>US ?</span></h1>
                    <p className=' lg:w-[500px]'>
                        CodeAlpha leads in Ed-Tech, the country's quickest-growing pro training platform. We're all about shaping future tech creators. Our top internships and certifications show awesome results: Over 35,000 students finished our internships. 95% of certified students boosted practical tech skills. Learning by doing: real projects, real skills. Flexibility for learning at your pace. Our strong alumni network offers support and job help. Partnerships with top tech firms add value. At CodeAlpha, we're building tech leaders and showing success in every story.
                    </p>
                    <div className='mt-5'>
                        <p className='flex items-center gap-3 text-lg'><IoCheckmarkDoneOutline className='text-2xl text-[#F8B720]' />Expert Trainers </p>
                        <p className='flex items-center gap-3 text-lg'><IoCheckmarkDoneOutline className='text-2xl text-[#F8B720]' />Online Remote Learning </p>
                        <p className='flex items-center gap-3 text-lg'><IoCheckmarkDoneOutline className='text-2xl text-[#F8B720]' />Online Remote Learning </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;