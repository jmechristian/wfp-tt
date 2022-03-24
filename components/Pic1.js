import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Pic1 = ({ author, location, content, pic }) => {
  return (
    <div className='picOne__container'>
      <div className='picOne__inner'>
        <div className='picOne__authorBlock'>
          <div
            className='picOne__profilePic'
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
          <div className='picOne__authDetails'>
            <div className='picOne__authDetailsTop'>
              <div className='authDetails__name'>{author}</div>
              <div className='authDetails__location'>{location}</div>
            </div>
            <div className='stars'>
              <StarIcon className='full-star' />
              <StarIcon className='full-star' />
              <StarIcon className='full-star' />
              <StarIcon className='full-star' />
              <StarIcon className='full-star' />
            </div>
          </div>
        </div>
        <div className='ruler'></div>
        <div
          className='picOne__content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Pic1;
