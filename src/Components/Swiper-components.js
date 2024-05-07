import React, { useState, useEffect } from 'react';

import Image1 from '../Images/Donate1.jpeg';
import Image2 from '../Images/Recieve1.jpeg';
import Image3 from '../Images/Donate2.jpg';
import Image4 from '../Images/Recieve2.jpg';
import Image5 from '../Images/Donate3.jpg';
import Image6 from '../Images/Recieve3.jpg';


const slides = [
    { id: 1, name: "Impactful Giving Made Simple", image: Image1, message: "Donate effortlessly with TechSahaya Annadaan.Your surplus meals make a real difference, connecting seamlessly with those in need. Join us in making impactful giving easy!" },
    { id: 2, name: "A Lifeline of Kindness", image: Image2, message: "TechSahaya Annadaan is more than meals; it's a lifeline. Simple, nourishing, and filled with kindness. Grateful for the community support!" },
    { id: 3, name: "Empower Change Through Giving", image: Image3, message: "Empower change effortlessly.Your donations create a direct impact, bringing positive change to those in need. Join us in making a difference today!" },
    { id: 4, name: "Transform Surplus into Impact", image: Image4, message: "TechSahaya Annadaan turn surplus into change. Your donations, big or small, create a direct impact. Join us in simplifying giving for a better community." },
    { id: 5, name: "Nourishment & Unity", image: Image5, message: "Experience nourishment with a sense of community. Our platform connects you to nutritious meals, fostering unity and support. Join us in creating a hunger-free community!" },
    { id: 6, name: "Nourishment Delivered with Care", image: Image6, message: "Experience care in every meal.At TechSahaya Annadaan we connect you with nutritious food delivered with compassion." }
];



const SwiperComponents = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);


    useEffect(() => {
        let intervalId;

        if (autoplay) {
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }, 4000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex, autoplay]);


    const handleMouseOver = () => {
        setAutoplay(false);
    };

    const handleMouseDown = () => {
        setAutoplay(true);
    };

    const handlePaginationClick = (index) => {
        setCurrentIndex(index);
    };

    const slidesList = slides.map((slide) => (
        <div key={slide.id} className='swiper-card'>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div className="swiper-card-info">
                <h1>{slide.name}</h1>
                <p>{slide.message}</p>
            </div>
        </div>
    ));

    const pagination = slides.map((_, index) => (
        <span key={index} className={index === currentIndex % slides.length ? 'active' : ''} onClick={() => handlePaginationClick(index)}></span>
    ));

    return (
        <div className='swiper' onMouseOver={handleMouseOver} onMouseDown={handleMouseDown}>
            <div className="swiper-container">
                <div className='swiper-wrapper' style={{ transform: `translateX(${-currentIndex * 16.67}%)` }}>
                    {slidesList}
                </div>
            </div>
            <div className="pagination">
                {pagination}
            </div>
        </div>
    )
}

export default SwiperComponents;
