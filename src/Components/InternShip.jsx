
import videoBanner from '/video-banner.jpg'
import { IoPeopleOutline } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { RiVideoFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { InternShipData } from '../assets/Data/InternShipData'


const InternShip = () => {



    return (
        <div id='courses'>
            <div className="bg-[#F5F1EB] py-10">
                <div className='text-center'>
                    <p className='uppercase'>Popular Courses</p>
                    <h1 className='lg:text-[45px] my-10'>Pick A Internship To Get Started</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-[1300px] mx-5 lg:mx-auto'>
                    {
                        InternShipData?.map((internship) => (
                            <div key={internship.title}>
                                <div className="rounded-lg lg:w-96 bg-base-100">
                                    <figure className='overflow-hidden'><img className='rounded-t-lg transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1' src={internship.image} alt="" /></figure>
                                    <div className='ml-2'>

                                        <button className='text-[#0062FF] bg-[#DDF4F1] mt-3 py-1 px-2'>{internship.tag}</button>

                                        <h2 className="lg:text-[23px] mt-3 hover:text-[#0062FF]">{internship.title}</h2>

                                        <div className="card-actions mt-2 justify-center">
                                            <a href="https://forms.gle/s9TW7Tqi3tAQLCu78"> <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-lg font-bold rounded-full lg:mb-0 mb-5 text-white flex items-center uppercase gap-3">Register</button></a>

                                        </div>
                                    </div>

                                    <div className='flex  gap-5 mt-4 ml-2'>
                                        <p className='flex items-center gap-2'> <IoLibraryOutline /> {internship.projects} projects </p>
                                        |
                                        <p className='flex items-center gap-2'><IoPeopleOutline />  {internship.students}k Students</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

                <div className="card-actions mt-7 justify-center">
                    <Link to='/internship'> <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-lg font-bold rounded-full lg:mb-0 mb-5 text-white flex items-center uppercase gap-3">Browser More Courses</button></Link>
                </div>

            </div>

            <div>
                <div className="hero relative w-[300px] h-[300px] lg:w-[900px]  lg:mx-auto  mx-5 rounded-bl-[150px] rounded-tr-[150px] lg:h-[500px] md:mx-auto mt-5 " style={{  backgroundImage: `url(${videoBanner})` }}>
                    <div className="hero-overlay bg-opacity-60 rounded-bl-[150px] rounded-tr-[150px]"></div>
                    <a className='absolute' href="https://www.youtube.com/shorts/y30PSqmK8Vs"> <RiVideoFill className='lg:text-[150px] rounded-full text-[50px] text-[#EE4962]'></RiVideoFill></a>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-24 overflow-hidden lg:mx-56 my-10'>
                <div className=' w-[180px] lg:w-[280px] text-center py-12 h-[170px] bg-[#E8F7F5]'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-[#1AB79D]'>98.1k</h1>
                    <p className='uppercase text-xl '>Student <br /> Enroll</p>
                </div>
                <div className=' w-[180px] lg:w-[280px] text-center py-12 h-[170px] bg-[#FDECEF]'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-[#EE4962]'>5.4k</h1>
                    <p className='uppercase text-xl '>Sessions completed</p>
                </div>
                <div className=' w-[180px] lg:w-[280px] text-center  py-12 h-[170px] bg-[#F3EEFF]'>
                    <h1 className='text-3xl lg:text-5xl text-[#8F57FF] font-semibold'>99.94%</h1>
                    <p className='uppercase text-xl '>Satisfaction <br /> rate</p>
                </div>
                <div className=' w-[180px] lg:w-[280px] text-center py-12 h-[170px] bg-[#FEF7E8]'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-[#F8B720]'>1454+</h1>
                    <p className='uppercase text-xl '>Top <br /> instructors</p>
                </div>
            </div>
        </div>
    );
};

export default InternShip;