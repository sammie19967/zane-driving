import React from 'react';
import './styles/WhatsAppIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
    const handleClick = () => {
        window.open('https://wa.me/+254717612213', '_blank');
    };

    return (
        <div className="whatsapp-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faWhatsapp} />
        </div>
    );
}

export default WhatsAppIcon;
