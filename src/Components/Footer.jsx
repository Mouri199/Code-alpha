import { FaLinkedin } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='py-10 px-5 grid lg:px-48 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 bg-[#24262B]'>
            <div className=' text-white'>
                <h1 className='text-2xl'>Company</h1>
                <hr className='w-[80px] my-2 h-2' />
                <ul>
                    <li>Home</li>
                    <li className="my-2">About Us</li>
                    <li>Services</li>
                    <li className="my-2">Affiliate Program</li>
                </ul>
            </div>
            <div className=' text-white'>
                <h1 className='text-2xl'>Our Services</h1>
                <hr className='w-[80px] my-2 h-2' />
                <ul>
                    <li> Internship Program</li>
                    <li className="my-2"> Ambassador Program</li>
                    <li>Web Devepoment</li>
                    <li className="my-2">App Development</li>
                    <li> Online Courses</li>
                </ul>
            </div>
            <div className=' text-white'>
                <h1 className='text-2xl'>Quick Link</h1>
                <hr className='w-[80px] my-2 h-2' />
                <ul>




                    <li> Privacy Policy</li>
                    <li className="my-2">Term & Conditions</li>
                    <li> Live Chat</li>
                    <li className="my-2">FAQ</li>
                </ul>
            </div>
            <div className=' text-white'>
                <h1 className='text-2xl'>Follow Us</h1>
                <hr className='w-[80px] my-2 h-2' />
                <div className="flex text-4xl gap-5">
                    <a href="https://www.linkedin.com/company/codealpha"> <FaLinkedin /> </a>
                    <a href=""> <TfiYoutube /> </a>
                    <a href=""> <FaTwitterSquare /></a>
                    <a href="https://t.me/CodeAlphaOfficial"> <FaTelegram /></a>

                </div>
                <a href="https://api.whatsapp.com/send/?phone=919336576683&text&type=phone_number&app_absent=0"><FaWhatsapp className="text-4xl my-4" /></a>
            </div>
        </div>
    );
};

export default Footer;