import React from 'react';

export const Comments = ({post}) =>
  (
    <div className='icon-info'>
      <img src='/WarningSign.jpg'/>
      <span>{post.num_comments} Comments</span>
    </div>
  );
