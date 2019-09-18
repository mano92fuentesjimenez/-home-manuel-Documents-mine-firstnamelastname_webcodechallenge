import React from 'react';
import './post-list.scss';
import { connect } from 'react-redux';
import { selectPosts, selectIsSearching } from "../top-bar/selectors";
import { Post } from "./components/post/post";
import { Loading } from "./components/loading/loading";

const PostList = ({ posts, isSearching }) => {

  return <div className="container">
    <div className="content-container">
      <div>
        { !isSearching && posts && posts.map(post => (<Post post={post}/>))}
        { isSearching && <Loading/>}
      </div>
    </div>
  </div>
};

const mapStateToProps = state => ({
  posts: selectPosts(state),
  isSearching: selectIsSearching(state),
});

export default connect(mapStateToProps)(PostList)
