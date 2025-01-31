import React from 'react';
import './components/styles/ContactUs.css';

const ContactCard = ({ campus, phone, email, address }) => (
  <div className="contact-card">
    <h3>{campus}</h3>
    <p><i className="fas fa-phone-alt"></i> {phone}</p>
    <p><i className="fas fa-envelope"></i> {email}</p>
    <p><i className="fas fa-map-marker-alt"></i> {address}</p>
  </div>
);

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Hero Section */}
      <section className="hero">
        <h1>Get in Touch with Us</h1>
        <p>We're here to help you get on the road safely. Reach out to any of our campuses for assistance.</p>
        <button className="cta-button">Message Us</button>
      </section>

      {/* Campuses Contact Information Section */}
      <section className="campus-info">
        <h2>Our Campuses</h2>
        <div className="campus-cards">
          <ContactCard campus="Kaiboi Campus" phone="(555) 123-4567" email="kaiboi@zane.com" address="123 Kaiboi Rd, Kaiboi" />
          <ContactCard campus="Eldoret Campus" phone="(555) 987-6543" email="eldoret@zane.com" address="456 Main St, Eldoret" />
          <ContactCard campus="Nakuru Campus" phone="(555) 543-2109" email="nakuru@zane.com" address="789 Nakuru Ave, Nakuru" />
        </div>
      </section>

      {/* Social Links Section */}
      <section className="social-section">
        <h2>Connect With Us</h2>
        <div className="social-links">
          <a href="https://facebook.com/zane-driving-school" className="social-icon"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="https://wa.me/1234567890" className="social-icon"><i className="fab fa-whatsapp"></i> WhatsApp</a>
          <a href="mailto:info@zane.com" className="social-icon"><i className="fas fa-envelope"></i> Email</a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
          
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
          
          <label>Campus:</label>
          <select>
            <option value="Kaiboi">Kaiboi</option>
            <option value="Eldoret">Eldoret</option>
            <option value="Nakuru">Nakuru</option>
          </select>
          
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          style={{ width: "100%", height: "300px" }}
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>

      {/* Business Hours Section */}
      <section className="business-hours">
        <h2>Business Hours</h2>
        <p><i className="fas fa-clock"></i> Mon-Fri: 8 AM - 5 PM</p>
        <p><i className="fas fa-clock"></i> Sat: 9 AM - 2 PM</p>
      </section>
    </div>
  );
};

export default ContactUs;
