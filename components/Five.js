import React from 'react';

const Five = ({ author, location, content }) => {
  return (
    <div className='five__container'>
      <div className='five__inner'>
        <div className='author__block'>
          <div className='five-location'>{location}</div>
        </div>
        <div className='ruler'></div>
        <div
          className='five__content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className='five-author'>&mdash; {author}</div>
      </div>
    </div>
  );
};

export default Five;
