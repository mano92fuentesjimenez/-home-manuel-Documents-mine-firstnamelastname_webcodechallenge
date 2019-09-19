import React from 'react';
import { ProfilePicture } from "../../../../sharedComponents/profilePicture/profilePicture";
import { Author } from "../../../../sharedComponents/author/author";
import { UpVotes } from "../../../../sharedComponents/up-votes/up-votes";
import { Comments } from "../../../../sharedComponents/comments/comments";
import { Title } from "../../../../sharedComponents/title/title";
import './post-description.scss'

export const PostDescription = ({ post }) => {
  return <div className="post-card-container">
      <ProfilePicture post={post}/>
      <div className="post-card-text-container">
        <Author post={post}/>
        <Title post={post}/>
      </div>
      <div className='post-description-bottom-bar'>
        <Comments post={post} showText={false}/>
        <UpVotes post={post} showText={false}/>
      </div>
    </div>
}
