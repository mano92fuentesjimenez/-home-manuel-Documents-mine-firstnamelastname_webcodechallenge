import React from 'react';
import './post-action.scss';
import { connect } from 'react-redux';
import { selectOpenPost } from "./selectors";
import ReactModal from 'react-modal';

const PostAction = ({ openPost }) => {

  return (<ReactModal
    isOpen={openPost !== null}
    className="blank"
  > <span>Hello</span> </ReactModal>);
};

const mapStateToProps = state => ({
  openPost: selectOpenPost(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAction)
