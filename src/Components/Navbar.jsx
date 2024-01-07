import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { GoArrowRight } from "react-icons/go";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='flex h-28 bg-white shadow-lg items-center justify-around'>

            <div>
                <img className='lg:w-[150px] w-[200px] rounded-full' src={logo} alt="" />
            </div>
            <div className='lg:block hidden'>
                <ul className='flex  text-xl font-medium gap-10'>
                    <NavLink className='hover:text-[#0062FF] hover:underline' to='/'>Home</NavLink>
                    <NavLink className='hover:text-[#0062FF] hover:underline' to='/internship'>Internship</NavLink>

                    <details className="dropdown">
                        <summary className="">Tutorial</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <Link to='/html'><a>C++</a></Link>
                            <Link><a>Python</a></Link>
                            <Link><a>JAVA</a></Link>
                            <Link><a>HTML</a></Link>
                            <Link><a>CSS</a></Link>
                            <Link><a>JAVASCRIPT</a></Link>
                            <Link><a>PHP</a></Link>
                            <Link><a>MongoDB</a></Link>
                        </ul>
                    </details>

                    <NavLink className='hover:text-[#0062FF] hover:underline' to='/courses'>Courses</NavLink>

                </ul>
            </div>


            <div className='flex items-center gap-6'>
                <div className='flex items-center'>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item z-50">0</span>
                        </div>
                    </div>
                    <div className="drawer drawer-end lg:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost text-2xl"> <FiMenu /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <NavLink className='text-xl hover:text-[#0062FF] hover:underline' to='/'>Home</NavLink>
                                <NavLink className='text-xl hover:text-[#0062FF] hover:underline' to='/internship'>Internship</NavLink>
                                <details className="dropdown">
                                    <summary className="text-xl">Tutorial</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <Link to='/html'><a>C++</a></Link>
                                        <Link to='/html'><a>Python</a></Link>
                                        <Link to='/html'><a>JAVA</a></Link>
                                        <Link to='/html'><a>HTML</a></Link>
                                        <Link to='/html'><a>CSS</a></Link>
                                        <Link to='/html'><a>JAVASCRIPT</a></Link>
                                        <Link to='/html'><a>PHP</a></Link>
                                        <Link to='/html'><a>MongoDB</a></Link>
                                    </ul>
                                </details>

                                <NavLink className= 'text-xl hover:text-[#0062FF] hover:underline' to='/courses'>Courses</NavLink>
                            </ul>
                        </div>
                    </div>
                    {/* <div className='lg:hidden ml-5 text-2xl'>
                        <FiMenu />
                    </div> */}
                </div>
                <a className='lg:block hidden' href="https://forms.gle/s9TW7Tqi3tAQLCu78">
                    <button className='bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-2 text-xl font-bold rounded-full text-white flex items-center uppercase gap-3'>Enroll <GoArrowRight /></button>
                </a>
            </div>

        </div>
    );
};

export default Navbar;