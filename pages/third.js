import React from 'react';
import data from '../data';
import Three from '../components/Three';

const third = () => {
  const testimonials = data.testimonials;
  return (
    <div className='third__wrapper'>
      {testimonials.map((t, index) => (
        <Three
          key={index}
          author={t.author}
          content={t.content}
          location={t.location}
        />
      ))}
    </div>
  );
};

export default third;
