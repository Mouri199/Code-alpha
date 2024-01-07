import Lottie from "lottie-react";
import work from './work.json'
const HtmlFile = () => {
    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-6xl font-semibold">
                    The site is in Development
                </h1>
                <p className="text-2xl">  No content available now</p>
            </div>
            <Lottie className="h-[700px]" animationData={work}></Lottie>
        </div>
    );
};

export default HtmlFile;