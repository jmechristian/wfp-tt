import React from 'react';

const Two = ({ author, content, location }) => {
  return (
    <div className='two__container'>
      <div
        className='two__content'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className='two__author'>
        {author} / {location}
      </div>
    </div>
  );
};

export default Two;
