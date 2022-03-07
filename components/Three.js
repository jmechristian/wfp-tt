import React from 'react';

const Three = ({ author, content, location }) => {
  return (
    <div className='third__container'>
      <div className='third__inner'>
        <div
          className='third__content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className='third__author'>
          {author} / {location}
        </div>
      </div>
    </div>
  );
};

export default Three;
