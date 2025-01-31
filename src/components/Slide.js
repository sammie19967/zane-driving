import React, { useState, useEffect } from 'react';
import './styles/Typewriter.css';

const Slide = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(200); // Increased initial typing speed

    const words = ['Computer Training', 'Driving Courses'];
    const constantText = 'We offer ';

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];
            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at the end of the word
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(200); // Reset typing speed after deleting
            }

            const delta = isDeleting ? typingSpeed / 2 : typingSpeed;
            setTimeout(handleTyping, delta);
        };

        handleTyping();
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="TypingEffectContainer">
            <h1>{constantText}<span className="TypingText">{text}</span></h1>
        </div>
    );
};

export default Slide;
