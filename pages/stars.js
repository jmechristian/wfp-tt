import React from 'react';
import Stars from '../components/Stars';
import data from '../data';

const stars = () => {
  const testimonials = data.testimonials;
  return (
    <div className='third__wrapper'>
      {testimonials.map((t, index) => (
        <Stars
          key={index}
          author={t.author}
          content={t.content}
          location={t.location}
        />
      ))}
    </div>
  );
};

export default stars;
