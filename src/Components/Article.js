import React, { useState } from 'react';
import Slide1 from '../Images/businessman1.jpg';
import Slide2 from '../Images/businessman2.jpg';
import Slide3 from '../Images/businessman3.jpg';
import rightArrow from '../Images/circle_arrow_right_icon.png';
import leftArrow from '../Images/circle_arrow_left_icon.png';
import thanks from "../Images/thanks.png";

const slides = [
    { id: 1, name: "Rohan Desai", image: Slide1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora voluptates soluta accusantium reprehenderit veritatis hic ducimus sequi asperiores magni.' },
    { id: 2, name: "Serenity Patel", image: Slide2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora voluptates soluta accusantium reprehenderit veritatis hic ducimus sequi asperiores magni.' },
    { id: 3, name: "Kairos Singh", image: Slide3, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora voluptates soluta accusantium reprehenderit veritatis hic ducimus sequi asperiores magni.' }
];

const Article = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const slidesList = slides.map((slide) => (
        <div key={slide.id} className='slider'>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div className="slide-info">
                <h4>{slide.name}</h4>
                <h6>Business Man</h6>
                <p>{slide.message}</p>
            </div>
        </div>
    ));

    const pagination = slides.map((_, index) => (
        <span key={index} className={index === currentIndex ? 'active' : ''} onClick={() => showSlide(index)}></span>
    ));

    return (
        <div className='article'>
            <h1>Stay informed with<br /> our recent stories</h1>
            <span></span>
            <div className='article-card'>
                <div className="navigation">
                    <div className='thanks'>
                        <img src={thanks} alt="Thanks" />
                        <h3>Successful <br />contributors</h3>
                    </div>

                    <div className="button">
                        <div>
                            <button onClick={prevSlide}><img src={leftArrow} alt="Previous" /></button>
                            <button onClick={nextSlide}><img src={rightArrow} alt="Next" /></button>
                        </div>
                        <span style={{width:`${(currentIndex+1)*33}%`}} ></span>
                    </div>
                </div>

                <div className="slider-container">
                    <div className='slider-wrapper' style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                        {slidesList}
                    </div>
                </div>

            </div>

            <div className="pagination">
                {pagination}
            </div>
        </div>
    );
};

export default Article;
