import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './styles/Typewriter.css'; // Import the custom CSS for styling

const TypewriterEffect = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Driving School', 'Computer School'],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
      cursorChar: '$', 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typewriter-container">
      <h1>
        Welcome to Zane <span ref={el} className="typed-text" /> {/* Apply class to the typed text */}
      </h1>
    </div>
  );
};

export default TypewriterEffect;
