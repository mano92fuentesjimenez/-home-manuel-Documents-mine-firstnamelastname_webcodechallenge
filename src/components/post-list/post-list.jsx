import React from 'react';
import './post-list.scss';
import { connect } from 'react-redux';
import { selectPosts } from "../top-bar/selectors";
import { Post} from "./components/post/post";

const PostList = ({ posts }) => {

  return <div className="container">
    <div className="content-container">
      <div>
        { posts && posts.map(post => (<Post post={post}/>))}
      </div>
    </div>
  </div>
};

const mapStateToProps = state => ({
  posts: selectPosts(state),
});

export default connect(mapStateToProps)(PostList)
