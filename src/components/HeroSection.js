import "./styles/HeroSection.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="carousel-slide">
            <div className="carousel-content">
              <h1>Transform Your Learning Journey</h1>
              <p>Join our expert-led courses designed to help you succeed in today’s competitive world.</p>
              <a href="/courses" className="cta-button">Explore Courses</a>
            </div>
            <img src="refresher.jpg" alt="Slide 1" />
          </div>
  
          {/* Slide 2 */}
          <div className="carousel-slide">
            <div className="carousel-content">
              <h1>Become an Industry Leader</h1>
              <p>Empower your career with skills that put you at the forefront of innovation.</p>
              <a href="/courses" className="cta-button">Get Started</a>
            </div>
            <img src="driving-course.png" alt="Slide 2" />
          </div>
  
          {/* Slide 3 */}
          <div className="carousel-slide">
            <div className="carousel-content">
              <h1>Flexible Learning for Busy Lives</h1>
              <p>Study at your own pace with flexible schedules that fit around your commitments.</p>
              <a href="/join" className="cta-button">Join Us Now</a>
            </div>
            <img src="/computer-course.png" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default HeroCarousel;
  