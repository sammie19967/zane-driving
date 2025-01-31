import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import ImageText from "./components/ImageText";
import MapComponent from "./components/MapComponent";
import PackageComponent from "./components/PackageComponent";
import RefresherStudent from "./components/refresherStudent2";
import Slide from "./components/Slide";
import WhatsAppIcon from "./components/WhatsappIcon";
import WhyChooseUs from "./components/WhyChooseUs";

const Main = () => {
    return (
        <div className="main-container">


            <HeroSection />
            <WhyChooseUs/>
            <ImageText />
            <RefresherStudent />
            <PackageComponent />

            <MapComponent />
            <WhatsAppIcon />
        </div>
    );
};

export default Main;
