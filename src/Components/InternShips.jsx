
import { IoPeopleOutline } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { InternShipDatas } from '../assets/Data/InternShipDatas'




const InternShips = () => {
    return (
        <div>

            <div className="bg-[#F5F1EB] py-10 ">
                <div className='text-center'>

                    <h1 className='lg:text-[45px] font-semibold my-10'>Pick A Internship To Get Started</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-[1300px] mx-5 lg:mx-auto'>
                    {
                        InternShipDatas?.map((internship) => (
                            <div key={internship.title}>
                                <div className="rounded-lg w-96 bg-base-100">
                                    <figure className='overflow-hidden'><img className='rounded-t-lg transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1' src={internship.image} alt="" /></figure>
                                    <div className='ml-2'>

                                        <button className='text-[#0062FF] bg-[#DDF4F1] mt-3 py-1 px-2'>{internship.tag}</button>

                                        <h2 className="lg:text-[23px] mt-3 hover:text-[#0062FF]">{internship.title}</h2>

                                        <div className="card-actions mt-2 justify-center">
                                            <a href="https://forms.gle/s9TW7Tqi3tAQLCu78">
                                                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-lg font-bold rounded-full lg:mb-0 mb-5 text-white flex items-center uppercase gap-3">Register</button>
                                            </a>

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


            </div>
        </div>
    );
};

export default InternShips;