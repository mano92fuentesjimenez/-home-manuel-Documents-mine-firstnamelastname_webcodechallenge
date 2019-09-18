import React from 'react';

export const DownVotes = ({post}) =>
  (
    <div className='icon-info'>
      <img src='/WarningSign.jpg'/>
      <span>{post.ups} ups</span>
    </div>
  );
