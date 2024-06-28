import React, { useState } from 'react';
import image1 from "../assets/heroimage1.png"

const images = [
    'image1',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <img src={images[currentIndex]} alt="Hero Slide" className="w-full h-full object-cover" />
            <button className="absolute top-1/2 transform -translate-y-1/2 left-2 text-yellow-400 text-4xl" onClick={prevSlide}>&#9664;</button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-yellow-400 text-4xl" onClick={nextSlide}>&#9654;</button>
        </div>
    );
};

export default Hero;
