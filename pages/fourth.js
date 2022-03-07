import React from 'react';
import Four from '../components/Four';
import data from '../data';

const fourth = () => {
  const testimonials = data.testimonials;
  return (
    <div className='third__wrapper'>
      {testimonials.map((t, index) => (
        <Four
          key={index}
          author={t.author}
          content={t.content}
          location={t.location}
        />
      ))}
    </div>
  );
};

export default fourth;
