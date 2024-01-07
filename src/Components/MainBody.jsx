import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Headroom from "react-headroom";
import Footer from "./Footer";


const MainBody = () => {
    return (
        <div>
            <Headroom>
                <Navbar></Navbar>
            </Headroom>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainBody;