import React from 'react';
import Slider from 'react-slick';
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Carousel.css';
import drivingImage from '../assets/driving-course.png';
import computerImage from '../assets/computer-course.png';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings} className="CarouselContainer">
            <div className="CarouselSlide">
                <img src={drivingImage} alt="Driving Course" className="CarouselImage" />
                <div className="CarouselTextContainer">
                    <h2>Driving Courses Offered</h2>
                    <button className="CarouselButton">Join Us Today</button>
                </div>
            </div>
            <div className="CarouselSlide">
                <img src={computerImage} alt="Computer Course" className="CarouselImage" />
                <div className="CarouselTextContainer">
                    <h2>Computer Packages Available</h2>
                    <button className="CarouselButton">Book Now</button>
                </div>
            </div>
        </Slider>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#000' }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#000' }}
            onClick={onClick}
        />
    );
};

export default Carousel;
