import React from 'react';

const Four = ({ author, content, location }) => {
  return (
    <div className='four__container'>
      <div className='four__inner'>
        <div className='author__block'>
          <div className='author'>{author}</div>
          <div className='location'>{location}</div>
        </div>
        <div className='ruler'></div>
        <div
          className='four__content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Four;
