import React, {useState} from 'react';
import './post-action.scss';
import { connect } from 'react-redux';
import { selectOpenPost } from "./selectors";
import ReactModal from 'react-modal';
import { PostDescription } from "./components/post-description/post-description";
import { ActionCard } from "./components/action-card/actionCard";
import { PostDragLayer } from "./components/dragLayer/drag-layer";
import { selectIsAnimatingPost } from "./selectors";

const PostAction = ({ openPost, isAnimatingPost }) => {

  return (
    <ReactModal
      isOpen={openPost !== null}
      className="modal-blank"
      portalClassName='react-modal'
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(100, 100, 100, 0.75)'
        }
      }}
    >
      <PostDragLayer/>
      <div className='container post-action-container'>
        <div className='container'>
            <PostDescription post={openPost} classNames={isAnimatingPost && 'hide'}/>
          <span className='post-action-instructions'> Drag the card on the left to the desired action </span>
        </div>
        <div className='post-action-cards'>
          <ActionCard actionName='link' actionText='Open on Reddit' imgPath='/WarningSign.jpg' post={openPost}/>
          <ActionCard actionName='email' actionText='Email to a friend' imgPath='/WarningSign.jpg' post={openPost}/>
        </div>
      </div>
    </ReactModal>);
};

const mapStateToProps = state => ({
  openPost: selectOpenPost(state),
  isAnimatingPost: selectIsAnimatingPost(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAction)
