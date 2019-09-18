import React from 'react';

export const UpVotes = ({post}) =>
  (
    <div className='icon-info'>
      <img src='/WarningSign.jpg'/>
      <span>{post.ups} ups</span>
    </div>
  );
