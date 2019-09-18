import React from 'react';
import './post-action.scss';
import { connect } from 'react-redux';
import { selectOpenPost } from "./selectors";
import ReactModal from 'react-modal';
import { PostDescription } from "./components/post-description/post-description";
import { ActionCard } from "./components/action-card/actionCard";

const PostAction = ({ openPost }) => {

  return (
    <ReactModal
      isOpen={openPost !== null}
      className="modal-blank"
      style={{
        overlay: {
          backgroundColor: 'rgba(100, 100, 100, 0.75)'
        }
      }}
    >
      <PostDescription post={openPost}/>
      <ActionCard actionName='email' actionText='Email to a friend' imgPath='/WarningSign.jpg'/>
      <ActionCard actionName='link' actionText='Open on Reddit' imgPath='/WarningSign.jpg'/>
    </ReactModal>);
};

const mapStateToProps = state => ({
  openPost: selectOpenPost(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAction)
