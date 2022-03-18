import React from 'react';
import data from '../data';
import Five from '../components/Five';

const five = () => {
  const testimonials = data.testimonials;
  return (
    <div className='third__wrapper'>
      {testimonials.map((t, index) => (
        <Five
          key={index}
          author={t.author}
          content={t.content}
          location={t.location}
        />
      ))}
    </div>
  );
};

export default five;
