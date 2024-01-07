import { IoLocationOutline } from "react-icons/io5";
import contact from '../contact.json'
import Lottie from "lottie-react";
const ContactForm = () => {
    return (
        <div className="lg:flex justify-around">
            <div className="lg:h-[100px] md:w-[500px] w-[350px] md:ml-[130px]">
                <Lottie className="lg:h-[600px] " animationData={contact}>

                </Lottie>

            </div>
            <div className="md:flex justify-center py-10">
                <div className="bg-[#C3C9DD] px-5 py-10">
                    <h1 className="text-3xl font-semibold my-4">More Infromation</h1>
                    <ul>
                        <li className="flex items-center "><IoLocationOutline /> Address:</li>
                        <li className="my-2">Lucknow, Uttar Pradesh India
                        </li>
                    </ul>

                    <h1 className="text-2xl  font-semibold mt-8">Contact Number:</h1>
                    <p>+91 9336576683</p>

                    <h1 className="text-2xl  font-semibold mt-8 mb-3">Email ID:</h1>
                    <p className="my-3"> services.codealpha@gmail.com</p>

                    <p> support@codealpha.tech</p>
                </div>

                <div className="bg-[#DCDFEA] px-10 py-10">
                    <h1 className="my-4 text-3xl font-semibold" >Contact Us</h1>
                    <div className="lg:flex gap-10">
                        <div>

                            <label>Name</label>
                            <br />
                            <input className="border h-12 w-72  lg:w-64" type="text" name="" id="" />
                        </div>
                        <div>

                            <label>E-mail Address</label>
                            <br />
                            <input className="border h-12 w-72  lg:w-64" type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="lg:flex gap-10">
                        <div>

                            <label>What's App Number</label>
                            <br />
                            <input className="border h-12 w-72  lg:w-64" type="text" name="" id="" />
                        </div>
                        <div>

                            <label>Phone Number</label>
                            <br />
                            <input className="border h-12 w-72  lg:w-64" type="text" name="" id="" />
                        </div>
                    </div>
                    <div>

                        <label>Message</label>
                        <br />
                        <input className="border h-[150px] w-72  lg:w-[550px]" type="text" name="" id="" />
                    </div>
                    <input className="lg:w-[550px] w-72 my-3 bg-[#627EDC] h-12 text-white text-xl font-medium rounded-lg" type="submit" value="SUBMIT" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;