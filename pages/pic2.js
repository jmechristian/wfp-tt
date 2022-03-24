import React from 'react';
import data from '../data';
import Pic2 from '../components/Pic2';

const pic2 = () => {
  const testimonials = data.testimonials;
  return (
    <div className='third__wrapper'>
      {testimonials.map((t, index) => (
        <Pic2
          key={index}
          author={t.author}
          content={t.content}
          location={t.location}
          pic={t.pic}
        />
      ))}
    </div>
  );
};

export default pic2;
