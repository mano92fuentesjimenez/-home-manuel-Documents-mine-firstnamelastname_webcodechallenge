import React from 'react';

export const UpVotes = ({post, showText=true}) =>
  (
    <div className='icon-info'>
      <img src='/WarningSign.jpg'/>
      <span>{post.ups} {showText && ' ups'}</span>
    </div>
  );
