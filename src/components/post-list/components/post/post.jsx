import React from "react";
import { ProfilePicture } from "../profilePicture/profilePicture";
import './post.scss'

export const Post = ({ post }) => {
    return <div className='post-container'>
      <ProfilePicture photoUrl={post.thumbnail} classNames='float-left'/>
      <li>{post.title}</li>
    </div>
};
