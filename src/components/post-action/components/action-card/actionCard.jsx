import React from 'react';
import classnames from 'classnames';
import './actionCard.scss';
import { useDrop } from "react-dnd";

export const ActionCard = ({imgPath, actionName, actionText}) => {
  const [{ hover }, drop] = useDrop({
    accept: 'post',
    collect: monitor => ({
      hover: monitor.isOver({shallow: true}),
    }),
  });

  return <div ref={drop} className={classnames("post-card-container", actionName, "action-card-container", {'action-card-hover': hover})}>
    <img src={imgPath} />
    <span>{actionText}</span>
  </div>
}
