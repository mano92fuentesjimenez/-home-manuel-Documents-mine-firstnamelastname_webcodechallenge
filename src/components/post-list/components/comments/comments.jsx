import React from 'react';
import './comments.scss';

export const Comments = ({post}) =>
  (
    <div className='comments'>
      <img src='/WarningSign.jpg'/>
      <span>{post.num_comments} Comments</span>
    </div>
  );
