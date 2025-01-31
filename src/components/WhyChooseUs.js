import React from 'react';
import './styles/WhyChooseUs.css';
import { FaChalkboardTeacher, FaRegCheckCircle, FaClipboardList } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        {/* Feature 1: Practical Approach */}
        <div className="feature">
          <FaClipboardList className="feature-icon" />
          <h3>Practical Approach</h3>
          <p>Our courses are designed with hands-on training and real-world scenarios to ensure you gain practical skills that employers value.</p>
        </div>
        {/* Feature 2: Skilled Instructors */}
        <div className="feature">
          <FaChalkboardTeacher className="feature-icon" />
          <h3>Skilled Instructors</h3>
          <p>Learn from industry professionals with years of experience who are passionate about teaching and helping you succeed.</p>
        </div>
        {/* Feature 3: Industry Certified */}
        <div className="feature">
          <FaRegCheckCircle className="feature-icon" />
          <h3>Industry Certified</h3>
          <p>Our programs are recognized and accredited by leading industry bodies, ensuring that your certification holds value in the job market.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
