import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Pic3 = ({ author, location, content, pic }) => {
  return (
    <div className='pic3__wrapper'>
      <div className='pic3__container'>
        <div
          className='pic3__top'
          style={{ backgroundImage: `url(${pic})` }}
        ></div>
        <div className='pic3__ruler'></div>
        <div className='pic3__bottom'>
          <div className='pic3__bottom__inner'>
            <div
              className='pic3__bottom__content'
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <div className='pic3__bottom__authorBlock'>
              <div className='pic3__bottom__author'>{author}</div>
              <div className='pic3__bottom__location'>{location}</div>
              <div className='stars'>
                <StarIcon className='full-star' />
                <StarIcon className='full-star' />
                <StarIcon className='full-star' />
                <StarIcon className='full-star' />
                <StarIcon className='full-star' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pic3;
