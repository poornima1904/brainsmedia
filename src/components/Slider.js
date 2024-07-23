import React, { useState, useEffect } from 'react';
import './Slider.css';

// Import images
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const images = [image1, image2, image3];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider" id="slider">
            <button className="prev" onClick={goToPreviousSlide}>
                &#10094;
            </button>
            <img src={images[currentIndex]} alt="Slider" className="slider-image" />
            <button className="next" onClick={goToNextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
