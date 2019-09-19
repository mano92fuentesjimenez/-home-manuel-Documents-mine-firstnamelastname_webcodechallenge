import React, {useState} from 'react';
import './post-action.scss';
import { connect } from 'react-redux';
import { selectOpenPost } from "./selectors";
import ReactModal from 'react-modal';
import { PostDescription } from "./components/post-description/post-description";
import { ActionCard } from "./components/action-card/actionCard";
import Draggable from "react-draggable";

const PostAction = ({ openPost }) => {
  const [dragging, changeDragging] = useState(false);
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
      <div className='container post-action-container'>
        <div className='container'>
          <Draggable
            bounds='.react-modal>*'
            position={{x:0, y: 0}}
            onStart={() => changeDragging(true)}
            onStop={()=> changeDragging(false)}
            defaultClassName={ dragging ? null : 'react-draggable-animate'}
          >
            <PostDescription post={openPost}/>
          </Draggable>
          <span className='post-action-instructions'> Drag the card on the left to the desired action </span>
        </div>
        <div className='post-action-cards'>
          <ActionCard actionName='link' actionText='Open on Reddit' imgPath='/WarningSign.jpg'/>
          <ActionCard actionName='email' actionText='Email to a friend' imgPath='/WarningSign.jpg'/>
        </div>
      </div>
    </ReactModal>);
};

const mapStateToProps = state => ({
  openPost: selectOpenPost(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAction)
