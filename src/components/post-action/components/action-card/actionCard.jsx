import React from 'react';
import classnames from 'classnames';
import './actionCard.scss';
import { useDrop } from "react-dnd";

export const ActionCard = ({imgPath, actionName, actionText}) => {
  const [a, drop] = useDrop({
    accept: 'post',
  });

  return <div ref={drop} className={classnames("post-card-container", actionName, "action-card-container")}>
    <img src={imgPath} />
    <span>{actionText}</span>
  </div>
}
