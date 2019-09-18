import React, {useState} from "react";
import { ProfilePicture } from "../profilePicture/profilePicture";
import { openPostAction } from "../../../post-action/actions";
import { Author } from "../author/author";
import { Title } from "../title/title";
import { Comments } from "../comments/comments";
import { UpVotes } from "../up-votes/up-votes";
import { DownVotes } from "../down-votes/down-votes";
import classnames from 'classnames';
import { connect } from 'react-redux';
import './post.scss'

const PostComponent = ({ post, onOpenPostActions }) => {
  const [mouseEntered, changeMouseEntered] = useState(false);

    return <div
      className={classnames('post-container', { 'post-mouse-in': mouseEntered})}
      onMouseEnter={() => changeMouseEntered(true)}
      onMouseLeave={() => changeMouseEntered(false)}
      onClick={() => onOpenPostActions(post)}
    >
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

const mapDispatchToProps = (dispatch)=> ({
  onOpenPostActions: (post) => dispatch(openPostAction(post)),
});

export const Post= connect(null, mapDispatchToProps)(PostComponent);
