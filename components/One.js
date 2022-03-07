import React from 'react';

const One = ({ author, content, location }) => {
  return (
    <div className='one__container'>
      <div
        className='one__content'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className='one__author'>{author}</div>
    </div>
  );
};

export default One;
