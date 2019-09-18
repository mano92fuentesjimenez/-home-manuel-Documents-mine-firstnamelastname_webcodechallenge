import React from 'react';

export const Comments = ({post, showText = true}) =>
  (
    <div className='icon-info'>
      <img src='/WarningSign.jpg'/>
       <span>{post.num_comments}{showText && ' Comments'}</span>
    </div>
  );
