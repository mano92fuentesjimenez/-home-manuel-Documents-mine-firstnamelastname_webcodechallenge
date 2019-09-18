import React from 'react';
import './up-votes.scss';

export const UpVotes = ({post}) =>
  (
    <div className='up-votes'>
      <img src='/WarningSign.jpg'/>
      <span>{post.ups} ups</span>
    </div>
  );
