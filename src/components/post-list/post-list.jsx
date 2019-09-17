import React from 'react';
import './post-list.sass';
import { connect } from 'react-redux';
import { selectPosts } from "../top-bar/selectors";

const PostList = ({ posts }) => {

  return <div className="posts-container">
    <ul>
      { posts && posts.map(post => (<li>{post.title}</li>))}
    </ul>
  </div>
};

const mapStateToProps = state => ({
  posts: selectPosts(state),
});

export default connect(mapStateToProps)(PostList)
