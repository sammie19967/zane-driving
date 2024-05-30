import Carousel from "./Carousel";
import ImageText from "./ImageText";
import ImageText2 from "./ImageText2";

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-text">
                <h1>Thanks for choosing Zane Driving School</h1>
                <h2>Expert Instruction Ever mile!</h2>
            </div>

            <Carousel />
            <ImageText />
            <ImageText2 />
        </div>
    );
}

export default Main;