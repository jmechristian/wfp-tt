import React from 'react';
import Two from '../components/Two';
import data from '../data';

const second = () => {
  const testimonials = data.testimonials;
  return (
    <div className='one__wrapper'>
      {testimonials.map((t, index) => (
        <Two
          key={index}
          author={t.author}
          content={t.content}
          location={t.location}
        />
      ))}
    </div>
  );
};

export default second;
