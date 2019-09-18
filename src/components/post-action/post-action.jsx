import React from 'react';
import './post-action.scss';
import { connect } from 'react-redux';
import { selectOpenPost } from "./selectors";
import ReactModal from 'react-modal';
import { PostDescription } from "./post-description/post-description";

const PostAction = ({ openPost }) => {

  return (
    <ReactModal
      isOpen={openPost !== null}
      className="modal-blank"
    >
      <PostDescription post={openPost}/>
    </ReactModal>);
};

const mapStateToProps = state => ({
  openPost: selectOpenPost(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAction)
