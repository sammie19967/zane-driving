import React from 'react';
import Typewriter from './Typewriter'; // Assuming you have the Typewriter component
import './styles/AdmissionHero.css';

const AdmissionHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/" alt="Hero Image" />
        </div>
        <div className="hero-text">
          
          <h3>Join us and start your journey towards success on the road and the computer universe</h3>
          <p>Click below to access the full courses catalogue on vehicles and computer classes</p>
          <button className="cta-button">View Catalog</button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;
