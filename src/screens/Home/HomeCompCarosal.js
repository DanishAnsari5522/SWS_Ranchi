import React, { useState } from 'react';
import '../../css/Home/HomeCompCarosal.css'
import { HomeCompCarosalData } from './HomeCompCarosalData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const HomeCompCarosal = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  var length1 = 0
  if (slides) {
    console.log(slides);
    length1 = slides.length;
    console.log(length1);
  }
  console.log(length1);



  const nextSlide = () => {
    setCurrent(current === length1 - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length1 - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='sliderHC'>
      <FaArrowAltCircleLeft className='left-arrowHC' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrowHC' onClick={nextSlide} />
      {HomeCompCarosalData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide activeHC' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='imageHC' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HomeCompCarosal;