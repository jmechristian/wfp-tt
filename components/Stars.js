import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Stars = ({ author, location, content }) => {
  return (
    <div className='stars__container'>
      <div className='stars__inner'>
        <div className='author__block'>
          <div className='stars'>
            <StarIcon className='full-star' />
            <StarIcon className='full-star' />
            <StarIcon className='full-star' />
            <StarIcon className='full-star' />
            <StarIcon className='full-star' />
          </div>
          <div className='star-location'>{location}</div>
        </div>
        <div className='ruler'></div>
        <div
          className='stars__content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className='star-author'>&mdash; {author}</div>
      </div>
    </div>
  );
};

export default Stars;
