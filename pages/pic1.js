import React from 'react';
import data from '../data';
import Pic1 from '../components/Pic1';

const pic1 = () => {
  const testimonials = data.testimonials;
  return (
    <div className='third__wrapper'>
      {testimonials.map((t, index) => (
        <Pic1
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

export default pic1;
