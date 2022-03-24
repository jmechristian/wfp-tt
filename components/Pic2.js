import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Pic2 = ({ author, location, content, pic }) => {
  return (
    <div className='picTwo__container'>
      <div className='picTwo__inner'>
        <div className='author__block'>
          <div className='picTwo-location'>{location}</div>
        </div>
        <div className='ruler'></div>
        <div
          className='picTwo__content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className='picTwo__authorBlock'>
          <div className='picTwo-author'>{author}</div>
          <div
            className='picTwo_profilePic'
            style={{ backgroundImage: `url(${pic})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Pic2;
