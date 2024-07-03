import Carousel from "./components/Carousel";
import ImageText from "./components/ImageText";
import MapComponent from "./components/MapComponent";
import PackageComponent from "./components/PackageComponent";
import RefresherStudent from "./components/refresherStudent2";


const Main = () => {
    return (
        <div className="main-container">
            <div className="welcome-text">

            </div>


            <Carousel />

            <ImageText />
            <RefresherStudent />
            <PackageComponent />

            <MapComponent />
        </div>
    );
};

export default Main;
