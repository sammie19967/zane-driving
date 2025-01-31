import React from 'react';
import './components/styles/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-image">
                    <img src="/images/about_us_hero.jpg" alt="About Us" />
                </div>
                <div className="hero-text">
                    <h1>About Zane Driving School</h1>
                    <p>Your trusted partner in driving education and safety.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <h2>Our Mission</h2>
                <div className="mission-content">
                    <p>
                        Our mission is to provide top-tier driving education to help students become confident, responsible drivers.
                        We are dedicated to promoting road safety through comprehensive training programs tailored to meet individual needs.
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section">
                <h2>Our Vision</h2>
                <div className="vision-content">
                    <p>
                        To be recognized as the leading driving school, committed to producing safe and competent drivers 
                        who respect traffic laws and contribute to road safety.
                    </p>
                </div>
            </section>

            {/* Core Principles Section */}
            <section className="principles-section">
                <h2>Core Principles</h2>
                <div className="principles-container">
                    <div className="principle">
                        <h3>Safety First</h3>
                        <p>Ensuring the safety of our students and the public is our top priority.</p>
                    </div>
                    <div className="principle">
                        <h3>Professionalism</h3>
                        <p>We adhere to the highest standards of professionalism in driving instruction.</p>
                    </div>
                    <div className="principle">
                        <h3>Quality Training</h3>
                        <p>We deliver thorough, high-quality training programs that prepare students for the road.</p>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="achievements-section">
                <h2>Our Achievements</h2>
                <div className="achievements-container">
                    <div className="achievement">
                        <h3>10,000+ Students Trained</h3>
                        <p>We have successfully trained over 10,000 students across all our campuses.</p>
                    </div>
                    <div className="achievement">
                        <h3>Certified by National Transport Authority</h3>
                        <p>Our driving programs are officially certified and recognized by the National Transport Authority.</p>
                    </div>
                    <div className="achievement">
                        <h3>95% Pass Rate</h3>
                        <p>Our students boast a 95% success rate in their driving exams.</p>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews-section">
                <h2>What Our Students Say</h2>
                <div className="reviews-container">
                    <div className="review-card">
                        <p>"Zane Driving School helped me become a confident driver. The instructors were very professional."</p>
                        <h4>- Sarah W.</h4>
                    </div>
                    <div className="review-card">
                        <p>"Great experience! I passed my driving test on the first attempt thanks to the amazing training."</p>
                        <h4>- James M.</h4>
                    </div>
                    <div className="review-card">
                        <p>"The best driving school with friendly instructors and a flexible schedule."</p>
                        <h4>- Emily T.</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
