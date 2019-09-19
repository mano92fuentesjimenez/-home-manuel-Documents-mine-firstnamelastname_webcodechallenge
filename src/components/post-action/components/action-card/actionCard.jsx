import React from 'react';
import classnames from 'classnames';
import './actionCard.scss';
import { useDrop } from "react-dnd";
import { connect } from 'react-redux';
import { postAction } from "../../actions";

const ActionCardComponent = ({imgPath, actionName, actionText, applyAction, post}) => {
  const [{ hover }, drop] = useDrop({
    accept: 'post',
    collect: monitor => ({
      hover: monitor.isOver({shallow: true}),
    }),
    drop: item => {
      applyAction(actionName, post)
    }
  });

  return <div ref={drop} className={classnames("post-card-container", actionName, "action-card-container", {'action-card-hover': hover})}>
    <img src={imgPath} />
    <span>{actionText}</span>
  </div>
};

const mapDispatchToProps = (dispatch)=> ({
  applyAction: (actionName, post) => dispatch(postAction({ actionName, post})),
});

export const ActionCard = connect(null, mapDispatchToProps)(ActionCardComponent);
