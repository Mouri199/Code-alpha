
import code from '/category-3.svg'

const InternCards = () => {
    return (
        <div>
            <div className="mt-10">
                <h1 className=" text-center lg:text-[45px] text-[32px] font-semibold">Virtual <span className="text-[#0062FF]">Internships</span> For Remote Learning.</h1>
                <p className=" text-center">Several online programs provided for remote working are below.</p>
            </div>

            <div className="mb-10 mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-5 lg:mx-28 ">
                <div className=" card mb-10  lg:w-96 md:w-[350px] shadow-xl">
                    <div className="card-body text-center rounded-lg bg-[#E8F7F5] ">

                        <div >
                            <p className="text-3xl mb-5 lg:ml-[100px] ml-[130px] items-center flex justify-center bg-[#D3F0EC] rounded-full w-[80px] h-[80px]">  <img className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1" src={code} alt="" /></p>
                            <div className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1">

                                <h2 className="lg:text-2xl text-[23px] font-medium mb-3 ">Web Development</h2>
                                <p className="mb-10">CodeAlpha offers you the opportunity to enroll Web Development programs at <br /> this platform.</p>
                            </div>

                            <button className="bg-[#D3F0EC] text-[#55B79D] px-8 py-1">
                                7 Courses
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" card  mb-10 lg:w-96 md:w-[350px] shadow-xl">
                    <div className="card-body text-center rounded-lg bg-[#FDECEF] ">

                        <div>
                            <p className="text-3xl mb-5 lg:ml-[100px] ml-[130px] items-center flex justify-center bg-[#FBDBE1] rounded-full w-[80px] h-[80px]">  <img className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1" src={code} alt="" /></p>
                            <div className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1">
                                <h2 className="lg:text-2xl text-[23px] font-medium mb-3  ">App Development</h2>
                                <p className="mb-10">CodeAlpha offers you the opportunity to enroll App Development programs at this platform.</p>
                            </div>

                            <button className="bg-[#FBDBE1] text-[#EE4962] px-8 py-1">
                                7 Courses
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" card mb-10  lg:w-96 md:w-[350px] shadow-xl">
                    <div className="card-body text-center rounded-lg bg-[#ECEFFC] ">

                        <div >
                            <p className="text-3xl mb-5  ml-[130px] lg:ml-[100px] items-center flex justify-center bg-[#DBE1F9] rounded-full w-[80px] h-[80px]">  <img className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1" src={code} alt="" /></p>
                            <div className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1">
                                <h2 className="lg:text-2xl text-[23px] font-medium mb-3  ">Java Programming</h2>
                                <p className="mb-10">CodeAlpha offers you the opportunity to enroll Java Programming programs at <br /> this platform.</p>
                            </div>

                            <button className="bg-[#DBE1F9] text-[#4461E4] px-8 py-1">
                                7 Courses
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" card mb-10 lg:w-96 md:w-[350px] shadow-xl">
                    <div className="card-body text-center rounded-lg bg-[#FEF7E8] ">

                        <div >
                            <p className="text-3xl mb-5 ml-[100px] items-center flex justify-center bg-[#FDF0D3] rounded-full w-[80px] h-[80px]">  <img className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1" src={code} alt="" /></p>
                            <div className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1">
                                <h2 className="lg:text-2xl text-[23px] font-medium mb-3  ">Python Programming</h2>
                                <p className="mb-10">CodeAlpha offers you the opportunity to enroll Python Programming programs at <br /> this platform.</p>
                            </div>

                            <button className="bg-[#FDF0D3] text-[#F8B720] px-8 py-1">
                                7 Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternCards;