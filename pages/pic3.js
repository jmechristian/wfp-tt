import React from 'react';
import data from '../data';
import Pic3 from '../components/Pic3';

const pic3 = () => {
  const testimonials = data.testimonials;
  return (
    <div className='third__wrapper'>
      {testimonials.map((t, index) => (
        <Pic3
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

export default pic3;
