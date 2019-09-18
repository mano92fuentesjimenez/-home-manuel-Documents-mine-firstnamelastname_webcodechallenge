import React from "react";
import { ProfilePicture } from "../profilePicture/profilePicture";
import { Author } from "../author/author";
import { Title } from "../title/title";
import { Comments } from "../comments/comments";
import { UpVotes } from "../up-votes/up-votes";
import { DownVotes } from "../down-votes/down-votes";
import './post.scss'

export const Post = ({ post }) => {
    return <div className='post-container'>
      <ProfilePicture photoUrl={post.thumbnail}/>
      <div className='post-text-container'>
        <Author post={post}/>
        <Title post={post}/>
        <div className='post-bottom-bar'>
          <Comments post={post}/>
          <UpVotes post={post}/>
          <DownVotes post={post}/>
        </div>
      </div>

    </div>
};
