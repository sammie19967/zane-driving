// src/components/MapComponent.js
import React, { useState } from 'react';
import './styles/MapComponent.css';

const locationLinks = {
    Kaiboi: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12536.859629929792!2d35.07987087998176!3d0.21365050733501417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178001a6de0e9ab7%3A0x8088e927c5a6f8c1!2sKaiboi!5e0!3m2!1sen!2ske!4v1625290768296!5m2!1sen!2ske",
    Nakuru: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12276.876998306945!2d36.065899479980785!3d-0.30309864327204805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1788d3fa8e6c3675%3A0x18d8b660b5e8cfe5!2sNakuru!5e0!3m2!1sen!2ske!4v1625290798534!5m2!1sen!2ske",
    Eldoret: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12692.970652118997!2d35.255301479980826!3d0.5203811550861978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a01e4f1d9d%3A0x4a7b7e0ef9e1d13b!2sEldoret!5e0!3m2!1sen!2ske!4v1625290822073!5m2!1sen!2ske"
};

const MapComponent = () => {
    const [selectedLocation, setSelectedLocation] = useState('Nakuru');

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    return (
        <div className="map-container">
            <h1>Our Campuses</h1>
            <h2>Choose the location close to you</h2>
            <nav>
                <button onClick={() => handleLocationChange('Kaiboi')}>Kaiboi</button>
                <button onClick={() => handleLocationChange('Nakuru')}>Nakuru</button>
                <button onClick={() => handleLocationChange('Eldoret')}>Eldoret</button>
            </nav>
            <div style={{ height: "400px", width: "98%", marginTop: "20px" }}>
                <iframe
                    src={locationLinks[selectedLocation]}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default MapComponent;
